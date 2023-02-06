import express from "express";
import { getProdutosController } from "../modules/produtos/GetProdutosUseCase";

const produtoRouter = express.Router()

produtoRouter.get("/:id", (req, res) => {
    getProdutosController.handle(req, res)
})

export { produtoRouter }