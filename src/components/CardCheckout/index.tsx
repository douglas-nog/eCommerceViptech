import { Container } from "react-bootstrap"

export const CardCheckout = () => {
    return(
            <Container>
                <div  className='column'
                        style={{ 
                                display:"flex"
                            }}>

                            <div 
                                className="col-md-2"
                            >
                                <div className="row">
                                    <h3>Subtotal</h3>
                                    <p>R$300</p>
                                </div>
                                <div className="row">
                                    <h3>Frete</h3>
                                    <h3>R$30,00</h3>
                                </div>
                                <div className="row"> 
                                    <h3>Valor Total</h3>
                                    <h3>R$330,00</h3>
                                </div>
                            </div>
                </div>
            </Container >
    )
}