import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AddProduto } from './pages/AddProduto';
import { Carrinho } from './pages/Carrinho';
import { Home } from './pages/Home';
import { EditProdutos } from './pages/EditProduto';


export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>

            <Route
                    path='/'
                    element={<Home />} />
                <Route
                    path='/AddProduto'
                    element={<AddProduto />} />
                
                <Route
                    path='/Carrinho'
                    element={<Carrinho />} />

                <Route
                    path='/Editar'
                    element={<EditProdutos />} /> 
                
            </Routes>
        </BrowserRouter>
    )
}