import './cardPalestra.css'


function CardPalestra(props){

    return (

        <div class="cardApresent">

            <img className="imgSlider" src={props.imgSrc} />

            <div className='apresentacaoTexto'>


                <h1>{props.titulo}</h1>

                <p>Local: {props.local}</p>

                <p>Horario: {props.horario}</p>



            </div>
            
            
            
        </div>
            
            
    );

}

export default CardPalestra;



