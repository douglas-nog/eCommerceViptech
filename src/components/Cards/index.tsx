import Container from 'react-bootstrap/Container';
import lixeira from "../../images/lixo.svg";
import cart from "../../images/cart.svg";
import edit from "../../images/edit.svg";
import camera from "../../images/camera.png";
import { Link } from 'react-router-dom';

// interface interfaceProps {
//     img: string,
//     descricao: string,
//     marca: string,
//     valor: string,
//     cor: string
// }

export const Cards = () => {
    
    return(
        <Container fluid>
                <div  className='row'
                    style={{ marginTop:"30px", color:"#353535"}}>

                    <div className="col-md-1"></div>

                    <div
                        className='col-md-2'
                    >
                        <img
                            className='w-50'
                            src={camera}
                    />
                    </div>
                    
                    <div
                        className='col-md-6'
                    >
                    
                        <h3
                            style={{fontSize: '1rem', fontWeight: 'bold'}}
                            >Câmera interna inteligente Wi-Fi Full HD iM3</h3>

                        <p>Intelbras</p>
                        
                        <p
                            style={{
                                fontWeight: 'bold',
                                color: '#0F4C81'
                            }}
                        >
                            R$ 210,00
                        </p>

                        <p>Cor: Branco</p>    
                    </div>

                    <div
                        className='col-md-2'
                        style={{ verticalAlign:"center", display:"flex", alignItems:"center", justifyContent:"space-between"}}
                    >
                        <Link to='/Carrinho' className='nav-link'>
                            <img className='img'
                                src={cart}
                                
                            />
                        </Link>

                        <img className='img'
                            src={edit}
                            
                        />
                                
                        <img className='img'
                            src={lixeira}
                            
                        />
                    </div>
                </div>               
            
        </Container>
    )
}