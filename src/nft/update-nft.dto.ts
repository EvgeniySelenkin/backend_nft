import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/user.entity';

export class UpdateNftDto {

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  id:number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsInt()
  @ApiProperty()
  userId: User['id'];

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  price: number;
}