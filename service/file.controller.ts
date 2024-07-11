import { Controller, Post, Get, Delete, Put, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  uploadFile(@Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  listFiles(@Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getFile(@Param('id') id: string, @Request() req) {
   
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteFile(@Param('id') id: string, @Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateFile(@Param('id') id: string, @Request() req) {
    
  }

  @UseGuards(JwtAuthGuard)
  @Get('download/:id')
  downloadFile(@Param('id') id: string, @Request() req) {
    
  }
}
