import BreadcrumbSeparator from 'antd/es/breadcrumb/BreadcrumbSeparator';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const Navegacao = () => {
  return (
    <Breadcrumb 
      style={{
        padding:"25px",
        fontSize:"0.8em",
        marginLeft:"75px"
      }}
    >
    <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>

  </Breadcrumb>
  );
}