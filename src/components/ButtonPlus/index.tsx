import Button from 'react-bootstrap/Button';


interface interfaceProps {
    titulo: string, 
    icon: string | null;   
}

export const ButtonPlus = (props: interfaceProps) => {

    return(
        <>
            <div className="mb-2">
                <Button 
                    variant="primary" 
                    style={{
                        backgroundColor:'#0F4C81', 
                        width:'200px', 
                        height:'45px'
                    }} 
                    >
                        {
                            props?.icon && 
                            <img src={props.icon} alt="icon_plus" 
                                style={{ 
                                    marginRight:"10px"
                                }}
                            />
                        }
                        {props.titulo}
                </Button>   
            </div>
        </>
    )
}



