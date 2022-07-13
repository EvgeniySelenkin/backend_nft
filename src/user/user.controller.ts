import { Controller, Body, Param, Delete, Get, Patch, Post, Request, UseGuards} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':userId')
  getOne(@Param('userId') userId: number): Promise<User> {
    return this.userService.getOneUser(userId);
  }

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  /*@Patch(':id')
  update(@Body() updateColumnDto: UpdateColumnDto, @Param('id') id: string): Promise<Column> {
    return this.columnsService.update(id, updateColumnDto);
  }*/

  //@UseGuards(JwtAuthGuard)
  @Delete()
  remove(@Request() req): Promise<User> {
    return this.userService.remove(req.user);
  }
}
