import './MainHome.css'

import calendario from "../../img/calendar-home.png";

import logoGrande from "../../img/logoGrande.png";


function MainHome() {

    return (

        <section>

            <div className='mainHome'>

                <div className='containerTexto'>

                    <h1>Bem-vindos ao maior <a>Festival de Tecnologia</a> da Mata Norte!</h1>
                                   


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