import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "example@gmail.com", description: "E-mail address"})
    readonly email: string;

    @ApiProperty({example: "password1234", description: "Password"})
    readonly password: string;
}