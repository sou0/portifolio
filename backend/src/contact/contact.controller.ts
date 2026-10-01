import { Body, Controller, HttpCode, HttpStatus, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(@Inject(ContactService) private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
  async submitContact(@Body() createContactDto: CreateContactDto) {
    return this.contactService.processMessage(createContactDto);
  }
}
