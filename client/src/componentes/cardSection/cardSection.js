import './cardSection.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CardSection(props){

    
    const navigate = useNavigate();

    const eventoDados = {

    tipo: props.tipo,
    id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }

    


    const navegarPagina = () =>{

        navigate('/tela-evento', { state: eventoDados });
    }

    return (
        <div className="card">

            <img className="imgSlider" src={props.imgSrc} />
            
            <h1>{props.title}</h1>

            <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardSection;



