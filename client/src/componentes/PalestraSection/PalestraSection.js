import "./PalestraSection.css";

import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';

import { expoCardList, apresentCardList24 } from "../../data/dados";
import CardExpo from "../cardExpo/cardExpo";

import { useNavigate } from 'react-router-dom';
import CardApresent from "../cardApresent/cardApresent";

register();

function PalestraSection(props) {

    const navigate = useNavigate();

    const abrirPaginaTodos = () => {

        navigate('/pagina-todos-cards-apresent');
    }

    return (

        <section>

            <h1 className="titulo">{props.title}</h1>
            <Swiper

                slidesPerView={3}

                style={{

                    "--swiper-pagination-color": "#72c000",
                    "--swiper-navigation-color": "#72c000",

                }}

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={2}
                loop={true}

                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }
                }
                autoplay={{
                    delay: 2000
                }}
                modules={[EffectCoverflow]}
                pagination={{ clickable: true }}
                navigation
                className="swiperMaster"
            >
                {apresentCardList24.map((item) => (

                    <SwiperSlide key={item.id}>

                        <CardApresent

                            id={item.id}
                            imgSrc={item.imgSrc}
                            titulo={item.titulo}
                            local={item.local}
                            horario={item.horario}
                        />

                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={abrirPaginaTodos} className="botaoVerTodos">Ver Todos</button>

            <div className="degrade"></div>
        </section>


    );
}

export default PalestraSection;