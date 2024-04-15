import './CardApresentacao.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import cirandaCabloco from "../../img/culturais/cirandaCabloco.png";

import touLigado from "../../img/culturais/touLigado.png";

import uniaoBh from "../../img/culturais/uniaoBh.png";

function CardApresentacao(props){

    
    const navigate = useNavigate();

    const eventoDados = {

        id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }   


    const navegarPagina = () =>{

        navigate('/tela-stand', { state: eventoDados });
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

                        props.tipoApresen === 'touLigado'
                            ? touLigado
                            : props.tipoApresen === 'cirandaCabloco'
                            ? cirandaCabloco
                            : props.tipoApresen === 'uniaoBh'
                            ? uniaoBh
                            : ""
                    }
                />                
           
                <h1>{props.titulo}</h1>

                

                <h2>{props.artista}</h2>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            {/* <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>         */}
            
            
        </div>
            
            
    );

}

export default CardApresentacao;



