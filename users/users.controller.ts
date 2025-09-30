import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('api-users-v1')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post("upload")
    async uploadUser(@Body() userObject: UserDTO) {
        return this.usersService.uploadUser(userObject);
    }

    @Post("user")
    @HttpCode(200)
    async getUserByUsername(@Body() userObject: UserDTO) {
        const { username, password } = userObject;

        const userExists = await this.usersService.findUserByUsername(username);

        if (!userExists || userExists.password !== password) {
            throw new UnauthorizedException("Credenciales incorrectas");
        }

        return {
            username: userExists.username,
            position: userExists.position
        }
    }

    @Get("usersList")
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get("/:id")
    async getUserById(@Param("id") id: number) {
        return this.usersService.findUser(id);
    }

    @Put("update")
    updateUser(@Body() user: UserDTO) {
        return this.usersService.updateUser(user);
    }

    @Delete("delete/:id")
    deleteProduct(@Param("id") id: number) {
        return this.usersService.deleteUser(id);
    }
}
