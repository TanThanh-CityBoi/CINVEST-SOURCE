import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStatColumnToUsersTable1660634268513
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        ADD COLUMN stat_id BIGINT DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        DROP COLUMN stat_id
        ;
    `);
  }
}
