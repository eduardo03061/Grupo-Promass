import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../entities/ticket.entity';
import { Like } from 'typeorm';

@Controller('tickets')
export class TicketController {
  constructor(@InjectRepository(Ticket)
              private readonly ticketRepository: Repository<Ticket>,
  ) {
  }


  @Get()
  async findAllTickets(@Query() data): Promise<Ticket []> {
    const { query } = data;
    if (!query) {
      return await this.ticketRepository.find();
    }

    return await this.ticketRepository.find(
      {
        where:
          [{ title: Like(`%${query}%`) },
            { content: Like(`%${query}%`) },
            { author: Like(`%${query}%`) }],
      });
  }

  @Post()
  async createTicket(@Body() ticket: Ticket): Promise<Ticket> {
    try {
      return await this.ticketRepository.save(ticket);
    } catch (e) {
      return e;
    }

  }

}