import './CardLazer.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CardLazer(props){
 

    return (
        <div className="cardStand cardShow">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.titulo}</h1>

                <h2> {props.subtitulo} </h2>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>           
            

            {/* <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>         */}
            
            
        </div>            
            
    );

}

export default CardLazer;



