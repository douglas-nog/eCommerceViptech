import { Container } from "react-bootstrap";
import './style.css';
import information from "./../../images/information.svg";
import { ButtonCheckout } from "../ButtonCheckout";

export const CardCheckout = () => {
    return(
        <Container fluid>
            <div  className='column col-md-9'
                style={{ 
                    backgroundColor: "#F5F5F5",
                    borderRadius:"10px", 
                    
                }}
            >
                <Container>
                    <div id="lineDif">
                        <div className='column col-md-6'
                            style={{
                                textAlign:"left"
                            }}
                        >
                            Subtotal (1 item)
                        </div>
                        <div className='column col-md-6'
                            style={{
                                textAlign:"right"
                            }}
                        >
                            R$300,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="line">
                        <div className='column col-md-6'
                            style={{
                                textAlign:"left",
                                display:"flex"
                            }}
                        >
                            Frete 
                            <div
                                style={{
                                    marginLeft:"10px"
                                }}
                                >
                                <img 
                                src={ information } />
                            </div>
                        </div>
                        <div className='column col-md-6'
                            style={{
                                textAlign:"right"
                            }}
                        >
                            R$30,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="line">
                        <div className='column col-md-6'
                            style={{
                                textAlign:"left"
                            }}
                        >
                            Total
                        </div>
                        <div className='column col-md-6'
                            style={{
                                textAlign:"right"
                            }}
                        >
                            R$330,00
                        </div>
                    </div>
                </Container>
                <div
                    style={{ 
                        paddingBottom:"15px",
                        marginLeft:"8px"
                    }}
                >
                    <ButtonCheckout 
                        titulo="PAGAR"
                    />
                </div>
            </div>
        </Container >
    )
}