import "./Section.css";

import { register } from 'swiper/element/bundle'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';







import nfs from "../../img/techfest_logo.png";



register();

function Section() {


    return (

        <section>

            <Swiper            

               slidesPerView={3}
                style={{

                    "--swiper-pagination-color": "#72c000",
                    "--swiper-navigation-color": "#72c000",

                }}
                
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={3}
                loop={true}
                
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,

                    }
                }
                autoplay = {{
                    delay: 1500
                }}
                modules={[EffectCoverflow]}
                pagination={{ clickable: true }}
                navigation             

            >
                <SwiperSlide><img className="imgSlider" src={nfs} alt="Descrição da imagem" /></SwiperSlide>
                <SwiperSlide><img className="imgSlider" src={nfs} alt="Descrição da imagem" /></SwiperSlide>
                <SwiperSlide><img className="imgSlider" src={nfs} alt="Descrição da imagem" /></SwiperSlide>
                <SwiperSlide><img className="imgSlider" src={nfs} alt="Descrição da imagem" /></SwiperSlide>

            </Swiper>

        </section>


    );



}

export default Section;