import { Input, Select } from "antd";
import { FloatLabel } from "../FloatLabel";
import "./style.css";
import { Botao } from "../Button";
import { IconContext } from 'react-icons';
import iconCamera from "../../images/iconCamera.svg"

const { Option } = Select;

interface interfaceProps {
    titulo: string
}

export const Formulario = (props: interfaceProps) => {
//     const [nome, setNome] = useState("Digite o nome do produto");
//     const [marca, setMarca] = useState("Digite a marca do produto");
//     const [valor, setValor] = useState("000,00");
//     const [selectValue, setSelectValue] = useState("Selecione a cor");
//     const [data, setData] = useState();

  return (
    <form>
        <h3 
            style={{ 
                margin: "2rem", 
                marginLeft: "1px",
                fontWeight:"bold"
            }}> 
                {props.titulo} 
            </h3>

        <FloatLabel label="Nome do Produto" name="nome" >
            <Input id="campo"
                placeholder="Digite o nome do produto"
                // value={nome}
                // onChange={(e: any) => setNome(e.target.value)}
            />
        </FloatLabel>

        <FloatLabel label="Marca" name="marca" >
            <Input id="campo"
                placeholder="Digite a marca do produto"
                //value={marca} onChange={(e: any) => setMarca(e.target.value)} 
            />
        </FloatLabel>

        <FloatLabel label="Valor" name="valor" > 
            <Input id="valor"
                type="number"
                placeholder="000,00"
                //value={valor} onChange={(e: any) => setValor(e.target.value)} 
            />
        </FloatLabel>

        <FloatLabel label="Cor" name="cor" >
            <Select
                showSearch
                style={{ width: "200px" }}
                placeholder="Selecione a cor"
                //onChange={(e: any) => setSelectValue(e.target.value)}
                //value={selectValue}
                        
            >
                <Option value="preto">Preto</Option>
                <Option value="branco">Branco</Option>
                <Option value="azul">Azul</Option>
                <Option value="cinza">Cinza</Option>
            </Select>
        </FloatLabel>

        <FloatLabel label="Data" name="data" > 
            <Input id="data"
                type="date" 
                //value={data} onChange={(e: any) => setValor(e.target.value)} 
                />
        </FloatLabel>

        <IconContext.Provider value= {{ size:"4em", color:"#0F4C81"}}>             
            <FloatLabel label="Adicionar Foto"  > 
                <Input 
                    id="addFoto"
                    type="file" 
                    accept="image/*"
                        //value={data} onChange={(e: any) => setValor(e.target.value)} 
                />
            </FloatLabel>
        </ IconContext.Provider>
       
        <Botao 
            titulo="Adicionar Produto"/>
    <script src="script.js"></script>
    </form>
    
  );
};


