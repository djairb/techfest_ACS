import './CardStand.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CardStand(props){

    
    const navigate = useNavigate();

    const eventoDados = {

        id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }

    


    const navegarPagina = () =>{

        navigate('/tela-stand', { state: eventoDados });
    }

    return (
        <div class="cardStand">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.titulo}</h1>

                <p>{props.subtitulo}</p>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardStand;



