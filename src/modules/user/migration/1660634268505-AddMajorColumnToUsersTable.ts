import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMajorColumnToUsersTable1660634268505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        ADD COLUMN major TINYINT DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        DROP COLUMN major
        ;
    `);
  }
}
