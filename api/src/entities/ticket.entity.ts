import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 20 })
  author: string;

  @Column({ length: 20 })
  date: string;

  @Column({ length: 20 })
  content: string;
}