import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString({ message: 'O nome deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @IsEmail({}, { message: 'Forneça um endereço de e-mail válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsString({ message: 'O assunto deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O assunto é obrigatório.' })
  subject: string;

  @IsString({ message: 'A mensagem deve ser um texto válido.' })
  @IsNotEmpty({ message: 'A mensagem é obrigatória.' })
  @MinLength(5, { message: 'A mensagem deve ter pelo menos 5 caracteres.' })
  message: string;
}
