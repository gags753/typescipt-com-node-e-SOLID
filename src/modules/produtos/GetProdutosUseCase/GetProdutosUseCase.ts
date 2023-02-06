import { IProdutoRepository } from "../../../repositories/produtos/IProdutoRepository"

export class GetProdutosUseCase {
    constructor(private IProdutoRepository: IProdutoRepository) { }

    async execute(id: string) {
        return await this.IProdutoRepository.getProdutos(id)
    }
}