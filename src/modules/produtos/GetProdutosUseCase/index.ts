import { GetProdutosController } from "./GetProdutosController";
import { GetProdutosUseCase } from "./GetProdutosUseCase";
import { ProdutoRepository } from "../../../repositories/produtos/ProdutoRepository";

const produtoRepository = new ProdutoRepository()
const getProdutosUseCase = new GetProdutosUseCase(produtoRepository)
const getProdutosController = new GetProdutosController(getProdutosUseCase)

export { getProdutosUseCase, getProdutosController }