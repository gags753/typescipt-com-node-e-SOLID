import Produto from "../../models/product";

export interface IProdutoRepository {
    getProdutos(id: string): Promise<Produto | null>
}