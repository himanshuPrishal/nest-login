// src/common/decorators/is-email-already-exist.decorator.ts

import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsEmailAlreadyExist } from '../validators/is-email-already-exist.validator';

export function IsEmailAlreadyExistDecorator(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExist,
    });
  };
}
