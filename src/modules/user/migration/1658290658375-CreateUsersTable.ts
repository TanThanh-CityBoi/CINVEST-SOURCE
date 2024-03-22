import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1658290658375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS users (
          id BIGINT NOT NULL AUTO_INCREMENT,
          email VARCHAR(191) DEFAULT NULL,
          gender TINYINT NOT NULL DEFAULT 1,
          password VARCHAR(191) NOT NULL,
          phone VARCHAR(25) DEFAULT NULL,
          role VARCHAR(191) DEFAULT NULL,
          first_name VARCHAR(191) DEFAULT NULL,
          last_name VARCHAR(191) DEFAULT NULL,
          tax_number VARCHAR(191) DEFAULT NULL,
          phone_prefix VARCHAR(25) DEFAULT NULL,
          send_verification_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          status TINYINT DEFAULT NULL,
          slug VARCHAR(191) DEFAULT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id))
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
        ENGINE = InnoDB;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS users;');
  }
}
