import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 50)
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;
}
