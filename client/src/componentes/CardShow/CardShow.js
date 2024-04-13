import './CardShow.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CardShow(props){
 

    return (
        <div className="cardStand cardShow">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.nomeArtista}</h1>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>           
            

            {/* <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>         */}
            
            
        </div>            
            
    );

}

export default CardShow;



