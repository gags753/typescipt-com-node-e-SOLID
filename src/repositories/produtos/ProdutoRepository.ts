import Produto from "../../models/product";

export class ProdutoRepository {
    async getProdutos(id: string) {
        //await this.setProdutos()
        return await Produto.findOne({ where: { id } })
    }

    private async setProdutos() {
        return await Produto.create({ nome: 'caneta', price: 2 })
    }
}