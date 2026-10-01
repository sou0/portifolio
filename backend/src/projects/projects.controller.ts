import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(@Inject(ProjectsService) private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }
}
