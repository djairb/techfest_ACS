import "./Section.css";

import { register } from 'swiper/element/bundle'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';


import CardSection from "../cardSection/cardSection";

import { palestrasCardList, oficinasCardList } from "../../componentes/dados";

register();

function Section(props) {



    let data;

    { props.codEvento === "1" ? data = palestrasCardList : data = oficinasCardList }

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
                {data.map((item) => (

                    <SwiperSlide key={item.id}>
                        <CardSection

                            imgSrc={item.imgSrc}
                            title={item.title}
                            tipo={item.tipo}
                            id={item.id}
                        />

                    </SwiperSlide>
                ))}
            </Swiper>
        <div className="degrade"></div>
        </section>
        


    );



}

export default Section;