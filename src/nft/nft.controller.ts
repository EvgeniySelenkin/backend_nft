import { Controller, Body, Param, Delete, Get, Patch, Post, Request, UseGuards} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/user/user.entity';
import { CreateNftDto } from './create-nft.dto';
import { Nft } from './nft.entity';
import { NftService } from './nft.service';

@ApiTags('nfts')
@Controller('nfts')
export class NftsController {
  constructor(
    private readonly nftService: NftService,
  ) { }

  @Get()
  getAll(): Promise<Nft[]> {
    return this.nftService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Nft> {
    return this.nftService.getOneNft(id);
  }

  @Get('/user/:userId')
  getAllOfUser(@Param('userId') userId: number): Promise<Nft[]> {
    return this.nftService.getAllOfUser(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createNftrDto: CreateNftDto): Promise<Nft> {
    return this.nftService.createNft(createNftrDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/buy/:id')
  buy(@Body() body, @Param('id') id: number): Promise<Nft> {
    return this.nftService.buy(id, body.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/sell/:id')
  sell(@Body() body, @Param('id') id: number): Promise<Nft> {
    return this.nftService.sell(id, body.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Request() req, @Param('id') id: number): Promise<Nft> {
    return this.nftService.remove(req.user, id);
  }
}