import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMajorGroupColumnToUsersTable1660634268506
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        ADD COLUMN major_group TINYINT DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        DROP COLUMN major_group
        ;
    `);
  }
}
