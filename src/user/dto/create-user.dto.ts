import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { IsEmailAlreadyExistDecorator } from 'src/common/decorators/is-email-already-exist.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'john@example.com' })
    @IsEmail()
    @IsNotEmpty()
    @IsEmailAlreadyExistDecorator({ message: 'Email already exists!' })
    email: string;

    @ApiProperty({ example: 'StrongPassword123!' })
    @IsString()
    @IsNotEmpty()
    password: string;
}