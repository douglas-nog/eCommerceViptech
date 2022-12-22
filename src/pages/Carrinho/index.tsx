import { Header } from "../../components/Header"
import { CardCart } from "../../components/CardCarrinho"
import { Container } from "reactstrap"
import { Navegacao } from "../../components/Navegacao"
import { useState } from "react";


export const Carrinho = () => {
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
            <Navegacao />
            <Container>
                <div className="row">
                    <div 
                            className="col-8"
                            
                        >
                        <h2
                            style={{ fontWeight: 'bold' }}
                        >
                            Carrinho</h2>
                    </div>
                </div>
            </Container>
            <Container>
                               
                    <div className="row">
                        <div 
                            className="col-8"
                            style={{ boxSizing:"border-box", border:"1px solid #b2b2b2"}}
                        >
                        <CardCart Plus={Plus} Reduce={Reduce} qty={qty}/>   
                        </div>
                    </div>
                
            </Container>

            
        </>
    )
}