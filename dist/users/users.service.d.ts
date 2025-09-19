import { UserDTO } from './dto/user.dto';
import { Repository } from 'typeorm';
import { USERS } from './entity/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<USERS>);
    uploadUser(user: UserDTO): Promise<UserDTO & USERS>;
    getAllUsers(): Promise<USERS[]>;
    findUserByUsername(username: string, password: string): Promise<USERS>;
    findUser(id?: number): Promise<USERS>;
    updateUser(user: UserDTO): Promise<UserDTO & USERS>;
    deleteUser(id: number): Promise<boolean>;
}
