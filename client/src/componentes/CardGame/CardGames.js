import './CardGame.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import freefire from "../../img/gamer/freefire.png";

import fifa from "../../img/gamer/fifa.png";


function CardGame(props){

    
    const navigate = useNavigate();

    const eventoDados = {

        id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }    


    const navegarPagina = () =>{

        navigate('/tela-game', { state: eventoDados });
    }

    return (
        <div class="cardStand">

            <img src={props.imgSrc} />

            <div>

                <img
                    
                    className={

                        props.tipoGame === 'freefire'
                            ? "imgGameCardFreeFire"
                            : 'imgGameCardFiFa'
                    }
                       
                    src={

                        props.tipoGame === 'freefire'
                            ? freefire
                            : props.tipoGame === 'fifa'
                            ? fifa
                            : ""
                    }
                />                
           
                <h1>{props.titulo}</h1>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardGame;



