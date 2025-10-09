import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { USERS } from './entity/users.entity';
import * as bcrypt from 'bcryptjs'
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(USERS) private readonly usersRepository: Repository<USERS>
    ) {}

    async createUser(userCreated: UserDTO): Promise<USERS> {
        const hashedPassword = await bcrypt.hash(userCreated.password, 10)

        const newUser = this.usersRepository.create({
            ...userCreated,
            password: hashedPassword
        })

        return this.usersRepository.save(newUser);
    }

    async validateUser(userLogged: LoginDTO): Promise<boolean> {
        const userExists = await this.findUserByUsername(userLogged.username);
        if (!userExists) return false;

        return await bcrypt.compare(userLogged.password, userExists.password);
    }

    async findUserByUsername(username: string): Promise<USERS | null>{
        return await this.usersRepository.findOne({
            where: { username, status: 1 }
        })
    }

    async getAllUsers() {
        return await this.usersRepository.find();
    }

    async findUser(id?: number) {
        return await this.usersRepository.findOne({ 
            where: { id }
        });
    }

    updateUser(user: UserDTO) {
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number) {
        const userExists = this.findUser(id);

        const rows: UpdateResult = await this.usersRepository.update(
            { id },
            { status: 0 }
        )

        return rows.affected == 1;
    }
}
