import './cardExpo.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CardExpo(props){

    
    const navigate = useNavigate();

    const eventoDados = {

    id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }

    


    const navegarPagina = () =>{

        navigate('/tela-expo', { state: eventoDados });
    }

    return (
        <div class="cardExpo">

            <img className="imgSlider" src={props.imgSrc} />
            
            <h1>{props.titulo}</h1>

            <p>Palestrante:</p>

            <h2>{props.responsavel}</h2>

            <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardExpo;



