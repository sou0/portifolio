import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  async processMessage(createContactDto: CreateContactDto) {
    this.logger.log(`Nova mensagem recebida de: ${createContactDto.name} <${createContactDto.email}>`);
    this.logger.log(`Assunto: ${createContactDto.subject}`);

    const formattedWhatsAppText = `Olá Rodrigo! Meu nome é ${createContactDto.name} (${createContactDto.email}).\n*Assunto:* ${createContactDto.subject}\n*Mensagem:* ${createContactDto.message}`;
    const whatsappUrl = `https://wa.me/5581981656577?text=${encodeURIComponent(formattedWhatsAppText)}`;

    return {
      success: true,
      message: 'Mensagem processada com sucesso!',
      whatsappUrl,
      receivedAt: new Date().toISOString(),
      contact: {
        name: createContactDto.name,
        email: createContactDto.email,
        subject: createContactDto.subject
      }
    };
  }
}
