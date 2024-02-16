import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './controllers/ticket.controller';
import { Ticket } from './entities/ticket.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_NAME || 'hexalud',
      entities: [Ticket],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Ticket]),
  ],
  controllers: [TicketController],
})
export class AppModule {
}
