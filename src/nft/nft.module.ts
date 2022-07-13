import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/user/user.module';
import { NftsController } from './nft.controller';
import { Nft } from './nft.entity';
import { NftService } from './nft.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nft]), UsersModule],
  providers: [NftService],
  controllers: [NftsController],
  exports: [NftService]
})
export class NftModule {}