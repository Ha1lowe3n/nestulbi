import { CreateUserDto } from './dto/createUser.dto';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserDto> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.BOOLEAN,
        values: ['male', 'female'],
        defaultValue: false,
    })
    banned: boolean;

    @Column({
        type: DataType.STRING,
        values: ['male', 'female'],
        allowNull: true,
    })
    banReason: string;
}
