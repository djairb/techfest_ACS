import './CardShow.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import alexsandra from "../../img/culturais/alexsandra.png";

import nzambi from "../../img/culturais/nzambi.png";

function CardShow(props){
 

    return (
        <div className="cardStand cardShow">

            <img src={props.imgSrc} />

            <div>

                <img

                    className={

                        props.tipoApresen === ""
                            ? "imgApresentNone"
                            : "imgApresentVisu"
                    }
                       
                    src={

                        props.tipoApresen === 'alexsandra'
                            ? alexsandra
                            : props.tipoApresen === 'nzambi'
                            ? nzambi
                            : ""
                    }
                />                
           
                <h1>{props.nomeArtista}</h1>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>           
            

            {/* <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>         */}
            
            
        </div>            
            
    );

}

export default CardShow;



