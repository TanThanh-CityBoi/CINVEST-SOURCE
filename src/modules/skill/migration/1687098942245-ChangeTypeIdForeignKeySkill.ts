import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTypeIdForeignKeySkill1687098942245
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE skills
        MODIFY id VARCHAR(36) NOT NULL,
        MODIFY profile_id VARCHAR(36) NOT NULL,
        MODIFY position VARCHAR(191) DEFAULT NULL,
        ADD CONSTRAINT FK_profile_skill
        FOREIGN KEY (profile_id)
        REFERENCES profiles (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE skills
        MODIFY id BIGINT NOT NULL AUTO_INCREMENT,
        MODIFY profile_id BIGINT NOT NULL,
        MODIFY position VARCHAR(191) NOT NULL,
        DROP FOREIGN KEY FK_profile_skill;
        `);
  }
}
