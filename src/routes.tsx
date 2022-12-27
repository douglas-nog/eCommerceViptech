import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AddProduto } from './pages/AddProduto';
import { Cart } from './pages/Cart';
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
                    path='/Cart'
                    element={<Cart />} />

                <Route
                    path='/Editar'
                    element={<EditProdutos />} /> 
                
            </Routes>
        </BrowserRouter>
    )
}