import { Container } from "react-bootstrap";
import './style.css'

export const PaymentCard = () => {

    return(
        <Container fluid>
            <div  className='column col-md-5'
                style={{ 
                    borderRadius:"10px", 
                    border:"1px solid #039500",
                    alignContent:"center",
                    paddingBottom:"5px",
                    width:"400px"
                    
                }}
            >
                <Container>
                    <div id="lineDife">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center",
                                marginBottom: "15px",
                                fontSize:"20px",
                                fontWeight:"bold",
                                
                            }}
                        >
                            Pagamento Realizado com Sucesso!
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            Este Pagamento foi realizado com 
                            
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$200,00
                        </div>
                    </div>
                </Container>
                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$100,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$50,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$20,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$10,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$5,00
                        </div>
                    </div>
                </Container>

                <Container>
                    <div id="lineCedula">
                        <div className='column col-md-12'
                            style={{
                                textAlign:"center"
                            }}
                        >
                            X Cédula de R$2,00
                        </div>
                    </div>
                </Container>
            </div>
        </Container >
    )
}