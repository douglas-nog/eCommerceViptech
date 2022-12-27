import { Formulario } from "../../components/Form"
import { Header } from "../../components/Header"
import { Navegacao } from "../../components/Navegacao"

export const AddProduto = () => {

    return(
        <>
            <Header />

            <Navegacao 
                title="Adicionar produto"
            />

            <Formulario 
                titulo="Adicionar Produto"
            />
        </>
    )

}