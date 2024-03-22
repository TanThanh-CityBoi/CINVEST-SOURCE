import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('historical_logs')
export class HistoricalLogsEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'table_name', nullable: true })
  tableName: string;

  @Column({ name: 'entity_name', nullable: true })
  entityName: string;

  @Column({ name: 'entity_id', nullable: true })
  entityId: number;

  @Column({ name: 'actor_id_sub', nullable: true })
  actorIdSub: string;

  @Column({ name: 'action', nullable: true })
  action: string;

  @Column({ name: 'old_value', nullable: true, type: 'longtext' })
  oldValue: string;

  @Column({ name: 'new_value', nullable: true, type: 'longtext' })
  newValue: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
