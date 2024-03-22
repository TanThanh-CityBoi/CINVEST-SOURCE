import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTypeIdUser1687088270970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        MODIFY id VARCHAR(36) NOT NULL
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users 
        MODIFY id BIGINT NOT NULL AUTO_INCREMENT
        ;
    `);
  }
}
