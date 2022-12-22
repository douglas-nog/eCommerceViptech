import { Container } from "react-bootstrap"
import { Botao } from "../../components/Botao"
import { Cards } from "../../components/Cards"
import { Header } from "../../components/Header"
import { Navegacao } from "../../components/Navegacao"
import { Link } from 'react-router-dom';

export const Home = () => {
    return(
        <> 
            <Header 
                />  

            <Navegacao />

            <Container fluid>
                <div className="row" style={{ marginTop:'4rem', marginBottom:'3rem'}}>

                    <div className="col-md-1"></div>

                    <h3 className="col-md-8" style={{ fontWeight:"normal"}}>
                        Produtos
                    </h3>
                    <div className="col-md-2"
                        style={{ display:"flex", justifyContent: "center"}}
                        >

                        <Link to='/addproduto' className='nav-link'>
                            <Botao
                                
                                titulo="Adicionar Produto" 
                                
                            />
                        </Link>
                    </div>
                </div>
            </Container>
            <Cards />
        </>
    )
}