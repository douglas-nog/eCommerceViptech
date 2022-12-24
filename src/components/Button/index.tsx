import Button from 'react-bootstrap/Button';

interface interfaceProps {
    titulo: string,
}

export const Botao = (props: interfaceProps) => {

    return(
        <>
            <div className="mb-2">
                <Button 
                    variant="primary" 
                    style={{backgroundColor:'#0F4C81', width:'180px', height:'45px'}} 
                    >
                        {props.titulo} 
                    
                </Button>{' '}
            </div>
        </>
    )
}



