import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../entities/ticket.entity';


@Controller('tickets')
export class TicketController {
  constructor(@InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {
  }


  @Get()
  async findAllTickets(): Promise<Ticket []> {
    return await this.ticketRepository.find();
  }

  @Post()
  async createTicket(@Body() ticket: Ticket):Promise<Ticket> {
    try {
      return await this.ticketRepository.save(ticket);
    }catch (e) {
      return e
    }

  }

}