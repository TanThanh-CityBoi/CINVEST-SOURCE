import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGoogleColumnToUsersTable1660634268515
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        ADD COLUMN google_id VARCHAR(100) DEFAULT NULL,
        ADD COLUMN google_family_name VARCHAR(100) DEFAULT NULL,
        ADD COLUMN google_given_name VARCHAR(100) DEFAULT NULL,
        ADD COLUMN google_name VARCHAR(191) DEFAULT NULL,
        ADD COLUMN google_locale VARCHAR(10) DEFAULT NULL,
        ADD COLUMN google_picture VARCHAR(100) DEFAULT NULL,
        ADD COLUMN google_verified_email VARCHAR(2) DEFAULT NULL
        ;
    `);
    await queryRunner.query(`
        ALTER TABLE users 
        MODIFY password VARCHAR(191) DEFAULT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        DROP COLUMN google_id, DROP COLUMN google_family_name, DROP COLUMN google_given_name, DROP COLUMN google_name, DROP COLUMN google_locale, DROP COLUMN google_picture, DROP COLUMN google_verified_email
        ;
    `);
  }
}
