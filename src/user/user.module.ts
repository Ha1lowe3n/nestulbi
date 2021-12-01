import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Module({
    imports: [SequelizeModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
