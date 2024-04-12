import './CardPalestra.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import henrique from "../../img/palestras/henrique.png";

import mateus from "../../img/palestras/lari-mateus.png";


function CardPalestra(props){

    
    const navigate = useNavigate();

    const eventoDados = {

        id: props.id
    //sei onde buscar em tela evento o evento em dados.js pra carregar na pagina
    }   


    const navegarPagina = () =>{

        navigate('/tela-palestra', { state: eventoDados });
    }

    return (
        <div class="cardStand">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.titulo}</h1>
                
                <img
                        
                        src={

                            props.palestranteImgSrc === 'mateus'
                                ? mateus
                                : props.palestranteImgSrc === 'henrique'
                                ? henrique
                                : ""
                        }


                />

                
                <h2>{props.palestranteNome}</h2>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Ver detalhes</button>
            
            
        </div>
            
            
    );

}

export default CardPalestra;



