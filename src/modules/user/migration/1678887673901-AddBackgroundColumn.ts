import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBackgroundColumn1678887673901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users
        ADD COLUMN background VARCHAR(191) DEFAULT NULL;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users
        DROP COLUMN background;
    `);
  }
}
