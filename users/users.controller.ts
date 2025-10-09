import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('api-users-v1')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post("createUser")
    async uploadUser(@Body() userObject: UserDTO) {
        return this.usersService.createUser(userObject);
    }

    @Post("validateLogin")
    @HttpCode(200)
    async getUserByUsername(@Body() userLogged:LoginDTO) {

        const userExists = await this.usersService.findUserByUsername(userLogged.username);
        if (!userExists) throw new NotFoundException("User Not Found");

        const isValidUser = await this.usersService.validateUser(userLogged);
        if (!isValidUser) throw new UnauthorizedException("Credenciales incorrectas");

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
