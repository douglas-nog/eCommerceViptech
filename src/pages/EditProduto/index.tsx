import { Header } from "antd/es/layout/layout"
import { Formulario } from "../../components/Formulario"
import { Navegacao } from "../../components/Navegacao"

export const EditProdutos = () => {
    return(
        <>
            <Header />

            <Navegacao />

            <Formulario 
                titulo="Editar Produto"
            />
    </>
    )
}