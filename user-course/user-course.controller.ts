import { Controller, Post, Get, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserCourseService } from './user-course.service';

@Controller('user-course')
export class UserCourseController {
  constructor(private userCourseService: UserCourseService) {}

  @UseGuards(JwtAuthGuard)
  @Post('assign')
  assignCourse(@Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  listUserCourses(@Param('userId') userId: string, @Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/user/:userId')
  removeUserCourse(@Param('id') id: string, @Param('userId') userId: string, @Request() req) {
    
  }
}
