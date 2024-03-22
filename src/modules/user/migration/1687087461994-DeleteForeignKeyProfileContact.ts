import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteForeignKeyProfileContact1687087461994
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE profiles_contacts
            DROP FOREIGN KEY FK_user_contacts;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE profiles_contacts
        ADD CONSTRAINT FK_user_contacts
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION;
    `);
  }
}
