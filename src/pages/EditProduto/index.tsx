import { Header } from "../../components/Header"
import { Formulario } from "../../components/Form"
import { Navegacao } from "../../components/Navegacao"

export const EditProdutos = () => {
    return(
        <>
            <Header />

            <Navegacao 
                title="Editar Produto"
            />

            <Formulario 
                titulo="Editar Produto"
            />
    </>
    )
}