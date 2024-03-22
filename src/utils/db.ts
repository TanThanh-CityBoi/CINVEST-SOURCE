import fs from 'fs';
import { QueryRunner } from 'typeorm';

export async function runDbScriptSql(queryRunner: QueryRunner, path: string) {
  const queryStr = await fs.readFileSync(path).toString();

  const queries = queryStr.split(';').map((str) => str.trim());

  for (const query of queries) {
    if (query) await queryRunner.query(query);
  }
}
