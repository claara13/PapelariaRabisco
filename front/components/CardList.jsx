import CardProdutos from "@/components/CardProdutos"

export default function CardList(props){
    const {produtos} = props
    return(
        <div className="container">
                <div className="row">
                    {/* estrutura de repetição map */}
                    {produtos.map(function(produto, index){
                        return(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3"key ={index}>
                        <CardProdutos
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            quantidade={produto.quantidade}
                        />
                    </div>
                   )
                    })}
                </div>
            </div>
    )
}
