import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript'
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {UserRole} from "./user-role.model";

interface RoleCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
   @ApiProperty({example: '1', description: 'ID'})
   @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
   id: number;

   @ApiProperty({example: 'ADMIN', description: 'Unique value of role'})
   @Column({type: DataType.STRING, unique: true, allowNull: false})
   value: string;

   @ApiProperty({example: 'Administrator', description: 'Role description'})
   @Column({type: DataType.STRING, allowNull: false})
   description: string;

   @BelongsToMany(() => User, () => UserRole)
   users: User[];
}