import { Controller, Post, Get, Delete, Put, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createCourse(@Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  listCourses(@Request() req) {
 
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getCourse(@Param('id') id: string, @Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateCourse(@Param('id') id: string, @Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteCourse(@Param('id') id: string, @Request() req) {
    
  }
}
