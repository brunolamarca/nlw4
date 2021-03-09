import { json, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

    // http://localhost:3333/answers/5?u=982b348e-e317-4e0c-a3fe-da72f6be3d0e
/* 
Route Params => Parametro que compõem a rota
routes.get("answers/:values")

Query Params => Busca, Paginação, não obrigarios
? 
chave = valor

*/

    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser){
            return response.status(400).json({
                error: "Survey User does not exiest!",
            });
        }

        surveyUser.value = Number(value);
        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }