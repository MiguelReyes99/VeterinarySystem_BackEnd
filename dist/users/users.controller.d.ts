import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    uploadUser(user: UserDTO): Promise<UserDTO & import("./entity/users.entity").USERS>;
    getAllUsers(): Promise<import("./entity/users.entity").USERS[]>;
    getUserByUsername(username: string, password: string): Promise<import("./entity/users.entity").USERS>;
    getUserById(id: number): Promise<import("./entity/users.entity").USERS>;
    updateUser(user: UserDTO): Promise<UserDTO & import("./entity/users.entity").USERS>;
    deleteProduct(id: number): Promise<boolean>;
}
