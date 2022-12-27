import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './style.css'
import { Link } from 'react-router-dom';

interface interfaceBC {
  title: string;
}

export const Navegacao = (props: interfaceBC) => {
  return (
    <Breadcrumb  aria-label="breadcrumb" 
      style={{
        padding:"25px",
        fontSize:"0.8em",
        marginLeft:"103px"
      }}
    >
    <Breadcrumb.Item>
      <Link 
        to="/">
          Home
      </Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item active >
      {props.title}
    </Breadcrumb.Item>


  </Breadcrumb>
  );
}