import './cardSection.css'
import { Link } from 'react-router-dom';

function CardSection(props){

    return (
        <div class="card">

            <img className="imgSlider" src={props.imgSrc} />
            
            <h1>{props.title}</h1>

            <Link className="link-botao" to={props.pagina}>
                Ver Detalhes
            </Link>
            
                
            
        </div>
            
            
    );

}

export default CardSection;



