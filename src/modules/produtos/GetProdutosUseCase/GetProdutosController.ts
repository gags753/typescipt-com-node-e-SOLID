import { Request, Response } from "express";
import { GetProdutosUseCase } from "./GetProdutosUseCase";

export class GetProdutosController {
    constructor(private GetProdutosUseCase: GetProdutosUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const id = request.params.id
            return response.json(await this.GetProdutosUseCase.execute(id))
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }
}