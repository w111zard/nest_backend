import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript'
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/role.model";
import {UserRole} from "../roles/user-role.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
   @ApiProperty({example: '1', description: 'ID'})
   @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
   id: number;

   @ApiProperty({example: 'example@gmail.com', description: 'E-mail address'})
   @Column({type: DataType.STRING, unique: true, allowNull: false})
   email: string;

   @ApiProperty({example: 'password1234', description: 'Password'})
   @Column({type: DataType.STRING, allowNull: false})
   password: string;


   @ApiProperty({example: 'true', description: 'Is user banned or not'})
   @Column({type: DataType.BOOLEAN, defaultValue: false})
   banned: boolean;

   @ApiProperty({example: 'Some reason is here', description: 'Ban reason'})
   @Column({type: DataType.STRING, allowNull: true})
   banReason: string;

   @BelongsToMany(() => Role, () => UserRole)
   roles: Role[];
}