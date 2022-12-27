import Button from 'react-bootstrap/Button';


interface interfaceProps {
    titulo: string    
}

export const ButtonCheckout = (props: interfaceProps) => {

    return(
        <>
            <div className="mb-2">
                <Button 
                    variant="primary" 
                    style={{
                        backgroundColor:'#0F4C81', 
                        width:'23.5rem', 
                        height:'3.2rem'
                    }} 
                    >
                        {props.titulo}
                </Button>   
            </div>
        </>
    )
}