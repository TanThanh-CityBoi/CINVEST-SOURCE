import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeDataTypeColumnToUsersTable1660634268507
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        MODIFY major VARCHAR(3) DEFAULT NULL,
        MODIFY major_group VARCHAR(3) DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        MODIFY major TINYINT DEFAULT NULL,
        MODIFY major_group TINYINT DEFAULT NULL
        ;
    `);
  }
}
