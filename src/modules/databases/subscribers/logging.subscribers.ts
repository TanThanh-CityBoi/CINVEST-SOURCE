import { Logger } from '@nestjs/common';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { HistoricalLogsEntity } from './entity/historical-logs.entity';
import { LOG_ACTION_ENUM } from './enums/log-actions.enum';

@EventSubscriber()
export class LoggingSubscriber implements EntitySubscriberInterface {
  /**
   * Called after entity insertion.
   */
  async afterInsert(event: InsertEvent<any>) {
    if (event.metadata.tableName === 'historical_logs') return;
    Logger.debug('afterInsert');
    await event.manager.save(HistoricalLogsEntity, {
      tableName: event.metadata.tableName,
      entityName: event.metadata.targetName,
      entityId: event?.entity?.id || 1,
      actorIdSub: event.entity?.createdBy || 'system',
      action: LOG_ACTION_ENUM.CREATED,
      oldValue: JSON.stringify(null),
      newValue: JSON.stringify(event.entity),
    });
    Logger.debug('afterInsert DONE');
  }

  /**
   * Called after entity update.
   */
  async beforeUpdate(event: UpdateEvent<any>) {
    if (event.metadata.tableName === 'historical_logs') return;
    Logger.debug('beforeUpdate');
    const newValue = event.entity;
    const oldValue = await event.manager.findOne(event.metadata.target, {
      where: {
        id: newValue.id,
      },
    });

    await event.manager.save(HistoricalLogsEntity, {
      tableName: event.metadata.tableName,
      entityName: event.metadata.targetName,
      entityId: newValue?.id || 1,
      actorIdSub: event.entity?.updatedBy || 'system',
      action: LOG_ACTION_ENUM.UPDATED,
      oldValue: JSON.stringify(oldValue),
      newValue: JSON.stringify(newValue),
    });
    Logger.debug('beforeUpdate DONE');
  }
}
