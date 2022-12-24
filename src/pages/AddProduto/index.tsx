import { Formulario } from "../../components/Formulario"
import { Header } from "../../components/Header"
import { Navegacao } from "../../components/Navegacao"

export const AddProduto = () => {

    return(
        <>
            <Header />

            <Navegacao />

            <Formulario 
                titulo="Adicionar Produto"
            />
        </>
    )

}