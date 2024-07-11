import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'repowpols',
      password: '0000',
      database: 'loyiha',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
