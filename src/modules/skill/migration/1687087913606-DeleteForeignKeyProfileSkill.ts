import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteForeignKeyProfileSkill1687087913606
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE skills
        DROP FOREIGN KEY FK_profile_skill;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE skills
        ADD CONSTRAINT FK_profile_skill
        FOREIGN KEY (profile_id)
        REFERENCES cinvest_dev.profiles (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION;
    `);
  }
}
