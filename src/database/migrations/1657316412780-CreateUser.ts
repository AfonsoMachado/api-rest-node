import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1657316412780 implements MigrationInterface {
  // Create the table
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "string",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "string",
            isNullable: false,
          },
          {
            name: "email",
            type: "string",
            isNullable: true,
          },
        ],
      })
    );
  }

  // Drop the table
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
