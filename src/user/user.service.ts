import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repository: Repository<User>) {};

    async getOneUser(userId: number): Promise<User> {
        return this.repository.findOne({where: {id: userId}});
    }

    async getOneUserByUsername(username: string): Promise<User> {
        return this.repository.findOne({where: {username: username}});
    }

    async getAll(): Promise<User[]> {
        return this.repository.find();
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        dto.password =  await bcrypt.hash(dto.password, salt);
        return this.repository.save(dto);
    }

    async remove(user: User): Promise<User> {
        return this.repository.remove(user);
    }
}
