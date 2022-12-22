import { useState } from "react";
import { Container } from "reactstrap"
import camera from "../../images/camera.png";
import iconReduce from "../../images/iconReduce.svg"
import iconPlus from "../../images/iconPlus.svg"

export const CardCart =(props: any) => {
    return(

        <Container >
            <Container fluid>
                <div  className='row'
                        style={{ 
                            marginTop:"30px", 
                            color:"#353535"
                            }}>

                            <div 
                                className="col-md-1"
                            ></div>

                            <div
                                className='col-md-2'
                            >
                                <img
                                    className='w-50'
                                    src={camera}
                                />
                            </div>
                            
                            <div 
                                className='col-md-8'
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem', 
                                        fontWeight: 'bold'
                                    }}
                                    >Câmera interna inteligente Wi-Fi Full HD iM3</h3>

                                <p>Intelbras</p>

                                <p>Cor: Branco</p> 
                    </div>
                </div>
            </Container >

            <Container fluid>
                <div  className='row'
                        style={{ 
                            marginTop:"30px", 
                            color:"#353535", 
                            borderTop:"1px solid #b2b2b2", 
                            paddingTop:"2rem", 
                            paddingBottom:"1.5rem",
                            alignItems:"center"
                        }}>

                        <div
                            className='col-md-2'
                        >
                            <p
                                style={{ 
                                    fontWeight:"bold",
                                    alignItems:"start",
                                    display:"flex",
                                    justifyContent:"center",
                                    verticalAlign:"center"
                                }}
                                >Quantidade:
                            </p>
                        </div>   
                        <div 
                            className='col-md-6'
                            style={{
                                display:"flex",
                                alignItems:"center",
                                verticalAlign:"center"
                            }}
                        > 
                            <button 
                                style={{ 
                                    border:"none", 
                                    backgroundColor:"#ffff"
                                    }}
                                onClick={props.Reduce}>
                                <img src={iconReduce} />
                            </button>
                            <p 
                                style={{
                                    border:"1px solid black",
                                    borderRadius:"15%",
                                    width:"2.5rem",
                                    height:"1.9rem",
                                    display:"flex",
                                    justifyContent:"center",
                                    fontSize:"1.1rem"
                                }}
                            >
                                {props.qty}
                            </p>
                        
                            <button 
                                style={{ 
                                    border:"none", 
                                    backgroundColor:"#ffff"
                                    }}
                                onClick={props.Plus}>
                                <img src={iconPlus} />
                            </button>
                        </div>
                        
                        <div
                            className='col-md-2'
                        >
                        
                        </div>

                        <div 
                            style={{
                                fontWeight:"bold"
                            }}
                            className='col-md-1'
                        >
                            <p>R$300,00</p> 
                        </div>
                </div>
            </Container>
        </Container>
    )
}