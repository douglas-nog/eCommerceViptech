import './style.css';
import logoViptech from "../../images/logo.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const Header = () => {

    return(

        <Container fluid>
            <Row>
                <header
                    className='header'>
            
                        <img 
                            style={{ padding:'1rem'}}
                            className='img'
                            src={logoViptech}
                            alt='Logo da Empresa'
                        />
                </header>
            </Row>
        </Container>
    )

}