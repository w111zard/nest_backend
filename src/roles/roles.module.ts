import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import sequelize from "sequelize";
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from './role.model'
import {User} from "../users/user.model";
import {UserRole} from "./user-role.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
      SequelizeModule.forFeature([Role, User, UserRole])
  ],
  exports: [
      RolesService
  ]
})
export class RolesModule {}
