import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from 'src/user/user.entity';
import { Repository } from "typeorm";
import { CreateNftDto } from './create-nft.dto';
import { Nft } from './nft.entity';
import { UpdateNftDto } from './update-nft.dto';

@Injectable()
export class NftService {
    constructor(@InjectRepository(Nft) private repository: Repository<Nft>) {};

    async getOneNft(id: number): Promise<Nft> {
        return this.repository.findOne({where: {id: id}, relations: { user: true}});
    }

    async getAll(): Promise<Nft[]> {
        return this.repository.find();
    }

    async getAllOfUser(Id: number): Promise<Nft[]> {
        return this.repository.find({where: {userId: Id}});
    }

    async createNft(dto: CreateNftDto): Promise<Nft> {
        return this.repository.save(dto);
    }

    async buy(id:number, userId: number): Promise<Nft> {
        const nft = await this.getOneNft(id);
        const updateNft:UpdateNftDto = {
            id:nft.id,
            name:nft.name,
            photo:nft.photo,
            price:nft.price,
            userId:userId,
            description:nft.description
        }
        return this.repository.save(updateNft);
    }

    async sell(id:number, userId: number): Promise<Nft> {
        const nft = await this.getOneNft(id);
        const updateNft:UpdateNftDto = {
            id:nft.id,
            name:nft.name,
            photo:nft.photo,
            price:nft.price,
            userId:null,
            description:nft.description
        }
        return this.repository.save(updateNft);
    }

    async remove(user: User, id: number): Promise<Nft> {
        const nft = await this.getOneNft(id);
        if (nft) {
            if (!nft.user || user.id == nft.user.id) {
                return this.repository.remove(nft)
            }
        }
    }
}