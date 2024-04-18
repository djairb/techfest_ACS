import './CardShow.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import alexsandra from "../../img/culturais/alexsandra.png";

import nzambi from "../../img/culturais/nzambi.png";

import caique from "../../img/culturais/caique.png";

import adalberto from "../../img/culturais/adalberto.png";

import djdennys from "../../img/culturais/djdennys.png";






function CardShow(props){


    


    const navigate = useNavigate();

    const eventoDados = {

        id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }   


    const navegarPagina = () =>{

        navigate('/tela-show', { state: eventoDados });
    }
 

    return (
        <div className="cardStand">

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
                            : props.tipoApresen === 'caique'
                            ? caique
                            : props.tipoApresen === 'adalberto'
                            ? adalberto
                            : props.tipoApresen === 'djdennys'
                            ? djdennys
                            : ""
                    }
                />                
           
                <h1>{props.nomeArtista}</h1>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>           
            

            <button
            
                onClick={navegarPagina}

                className={

                    props.descricao === ''
                        ? "ocultarBotao"
                        : "botaoEvento"
                }>

                    Ver detalhes
                    
            </button>
            
            
        </div>            
            
    );

}

export default CardShow;



