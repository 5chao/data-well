import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ApiLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ip: string;

  @CreateDateColumn()
  created_time: Date;

  @CreateDateColumn()
  update_time: Date;
}
