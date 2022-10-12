import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript'
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {Role} from "./role.model";


@Table({tableName: 'user_role ', createdAt: false, updatedAt: false})
export class UserRole extends Model<UserRole> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}
