import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Test1723295000360 implements MigrationInterface {
  tableName: string = 'test';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'test',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            unsigned: true,
            isNullable: false,
            isGenerated: true,
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
