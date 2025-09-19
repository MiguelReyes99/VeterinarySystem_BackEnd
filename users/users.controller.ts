import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('api-users-v1')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post("upload")
    async uploadUser(@Body() user: UserDTO) {
        return this.usersService.uploadUser(user);
    }

    @Get("usersList")
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get("user")
    async getUserByUsername(@Query("username") username: string, @Query("password") password: string) {
        return this.usersService.findUserByUsername(username, password);
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
