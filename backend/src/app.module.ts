import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ContactModule, ProjectsModule, HealthModule]
})
export class AppModule {}
