import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddThumbColumnToUsersTable1660634268515
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        ADD COLUMN thumb VARCHAR(191) DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        DROP COLUMN thumb
        ;
    `);
  }
}
