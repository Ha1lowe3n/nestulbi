import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { UserModel } from './user/user.model';

export const ormConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [UserModel],
    autoLoadModels: false,
    // synchronize: false,
};
