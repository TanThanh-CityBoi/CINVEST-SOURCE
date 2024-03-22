import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { StateEnum } from '../enums/state.enums';

export abstract class BaseAbstractEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({
    name: 'state',
    type: 'enum',
    enum: [
      StateEnum.PENDING,
      StateEnum.APPROVED,
      StateEnum.DECLINE,
      StateEnum.CANCELED,
      StateEnum.PENDING_UPDATED,
      StateEnum.REJECT,
    ],
    default: StateEnum.PENDING,
    nullable: true,
  })
  state: string;
}
