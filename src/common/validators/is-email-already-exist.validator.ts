// src/common/validators/is-email-already-exist.validator.ts

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailAlreadyExist implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validate(email: string, args: ValidationArguments) {
    const user = await this.userRepository.findOne({ where: { email } });
    return !user; // ✅ return true if email does NOT exist
  }

  defaultMessage(args: ValidationArguments) {
    return `Email '${args.value}' is already in use.`;
  }
}
