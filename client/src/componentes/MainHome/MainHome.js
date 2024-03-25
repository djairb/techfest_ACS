import './MainHome.css'

import calendario from "../../img/calendar-home.png";

import logoGrande from "../../img/logoGrande.png";

import Typed from 'typed.js';
import { useEffect } from 'react';


function MainHome() {

    


    useEffect(() => {
        const typed = new Typed('#my-h1', {
            strings: ['Vem aí o maior Festival de Tecnologia da Mata Norte!'],
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

                    <h1 id="my-h1">Vem aí o maior <a>Festival de Tecnologia</a> da Mata Norte!</h1>



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