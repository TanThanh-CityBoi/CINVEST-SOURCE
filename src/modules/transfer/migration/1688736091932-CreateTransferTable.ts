import { MigrationInterface, QueryRunner } from 'typeorm';

import { SQLEnum } from '../../../common/enums/enums';

export class CreateTransferTable1688736091932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ${SQLEnum.CREATE} transfers (
        id CHAR(36) NOT NULL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        announced_date DATE NULL,
        price DOUBLE NULL,
        transaction_name VARCHAR(255) NULL,
        acquirer_id CHAR(36) NULL,
        profile_id CHAR(36) NULL,
        FOREIGN KEY (acquirer_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (profile_id) REFERENCES profiles_investment (id) ON DELETE CASCADE ON UPDATE CASCADE
      )
      CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
      ENGINE = InnoDB;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    ${SQLEnum.DROP} transfers`);
  }
}
