import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveysUsers1614650786219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("surveys_users", "values", "value");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
