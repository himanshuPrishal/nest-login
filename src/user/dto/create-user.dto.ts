import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { IsEmailAlreadyExistDecorator } from 'src/common/decorators/is-email-already-exist.decorator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsEmailAlreadyExistDecorator({ message: 'Email already exists!' })
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}