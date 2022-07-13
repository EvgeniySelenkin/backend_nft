import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Nft } from './nft/nft.entity';
import { NftModule } from './nft/nft.module';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    UsersModule,
    NftModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://fndohejn:wNMUubBiEVDZF5oOFqyjeGl6ulcPt1LM@abul.db.elephantsql.com/fndohejn',
      synchronize: true,
      entities: [User, Nft]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
