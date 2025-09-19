import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { USERS } from './users/entity/users.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      "type": "mssql",
      "host": "HappyPaws.mssql.somee.com",
      "port": 1433,
      "username": "mreyes99_SQLLogin_1",
      "password": "of7yv3qrh4",
      "database": "HappyPaws",
      "entities": [USERS],
      "synchronize": true,
      "options": {
        encrypt: false,
        enableArithAbort: true,
      }
    })
  ],
})
export class AppModule { }