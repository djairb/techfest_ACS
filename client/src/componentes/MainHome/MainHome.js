import './MainHome.css'

import calendario from "../../img/calendar-home.png";

import location from "../../img/location-home.png";

import logoGrande from "../../img/logoGrande.png";

import Typed from 'typed.js';
import { useEffect, useState } from 'react';


function MainHome() {


    const dataEvento = new Date(2024, 3, 23, 8, 0, 0); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo -- O mês de março é o número 2 no JavaScript, pois os meses são indexados a partir de 0.

    // Estado para armazenar a contagem regressiva
    const [contagem, setContagem] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    // Efeito para atualizar a contagem regressiva a cada segundo
    useEffect(() => {
        const atualizarContagem = () => {
            const agora = new Date();
            const diferenca = dataEvento - agora;

            // Calcular dias, horas, minutos e segundos
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            // Atualizar o estado da contagem
            setContagem({
                dias,
                horas,
                minutos,
                segundos,
            });
        };

        // Chamar a função a cada segundo
        const intervalo = setInterval(atualizarContagem, 1000);

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalo);
    }, []);

    // Formatar a contagem regressiva
    const contagemFormatada = `${contagem.dias} dias ${contagem.horas}h, ${contagem.minutos}m e ${contagem.segundos}s`;




    useEffect(() => {
        const typed = new Typed('#my-h1', {
            strings: ['Vem aí o maior Festival de Tecnologia e Inovação da Mata Norte!'],
            typeSpeed: 40,
            backSpeed: 20,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (

        <section>

            <div className='mainHome'>

                <div className='containerTexto'>

                    <h1 id="my-h1">Vem aí o maior Festival de Tecnologia e Inovação da Mata Norte!</h1>
                    <div className='icon-date-calendar'>

                        <img src={calendario}></img>
                        <h2><a>23, 24 e 25</a> de Abril de 2024</h2>

                    </div>

                    <div className='icon-date-calendar'>

                        <img src={location}></img>
                        <h2><a>Lagoa de Itaenga,</a> Pernambuco, Brasil.</h2>

                    </div>
                    <h2>Faltam <a>{contagemFormatada}</a> para as incrições!</h2>

                </div>

                <div className='containerLogo'>

                    <img className="logoGrande" src={logoGrande} alt="logo-techFest" />


                </div>


            </div>

            <div className="degrade"></div>

        </section>




    );
}

export default MainHome;