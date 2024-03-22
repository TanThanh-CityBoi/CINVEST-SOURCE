import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSkillTable1678343522984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE cinvest_dev.skills (
            id BIGINT NOT NULL AUTO_INCREMENT,
            name VARCHAR(191) NOT NULL,
            position VARCHAR(191) NOT NULL,
            endorsement TINYINT NULL,
            thumb VARCHAR(191) NULL,
            createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
            profile_id BIGINT NOT NULL,
            PRIMARY KEY (id),
            INDEX FK_profile_skill_idx (profile_id ASC) VISIBLE,
            CONSTRAINT FK_profile_skill
              FOREIGN KEY (profile_id)
              REFERENCES cinvest_dev.profiles (id)
              ON DELETE CASCADE
              ON UPDATE NO ACTION)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
        ENGINE = InnoDB;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS cinvest_dev.skills`);
  }
}
