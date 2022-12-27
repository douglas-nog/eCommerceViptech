import { Header } from "../../components/Header"
import { CardCart } from "../../components/CartCard"
import { Container } from "reactstrap"
import { Navegacao } from "../../components/Navegacao"
import { useState } from "react";
import { CardCheckout } from "../../components/CardCheckout";
import { PaymentCard } from "../../components/PaymentCard";


export const Cart = () => {
    var valor = 0;

    const [qty, setQty] = useState(0)

    function Plus(){
        setQty(qty + 1)
    }
    function Reduce(){
        if(qty != 0) setQty(qty - 1)
    }

    return(
        <>
            <Header />

            <Navegacao 
                title="Carrinho"
            />
            
                <Container fluid>
                        <div 
                            className="col-md-11"
                            style={{
                                display:"flex",
                            }}        
                        >   
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <h2
                                    style={{
                                        fontWeight: "bold",
                                        marginLeft:"10px"
                                    }}
                                >Carrinho</h2>
                            </div>
                            <div>
                                <h2
                                    style={{
                                        marginLeft:"75px",
                                        fontWeight: "bold"
                                    }}
                                >Resumo do Pedido</h2>
                            </div>
                            
                        </div>
                       
                    
                </Container>
                <Container fluid>  
                        <div
                            style={{
                                display:"flex"
                            }}
                        >
                            <div className="col-md-1"></div>
                            <div 
                                className="col-6"
                                style={{ 
                                    boxSizing:"border-box", 
                                    border:"1px solid #b2b2b2",
                                    borderRadius:"10px"
                                    }}
                            >
                            <CardCart Plus={Plus} Reduce={Reduce} qty={qty}/> 
                            
                            </div>
                            <CardCheckout />
                        </div>
                </Container>

                <Container fluid>
                    <div className="column col-md-12"
                        style={{
                            display:"flex",
                            marginTop:"15px"
                            
                        }}
                    >
                        <div className="column col-md-7"></div>
                        <div className="column col-md-10">
                            <PaymentCard />
                        </div>
                    </div>

                    
                    
                </Container>
                
                
            
        </>
    )
}