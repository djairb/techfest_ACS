import "./cardStand.css";

import React, { useState } from 'react';

import { register } from 'swiper/element/bundle'

import { Swiper, SwiperSlide } from 'swiper/react';

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';


import { standCardList } from "../../componentes/dados";

register();

function CardStand(props) {


    const [isOpen, setIsOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const handleClickImagem = (imageSrc) => {
        setIsOpen(true);
        setLightboxImage(imageSrc);
    };


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
                {standCardList.map((item) => (

                    <SwiperSlide key={item.id}>

                        <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                            <img className="w-full rounded standImg" src={item.imgSrc} />

                        </SlideshowLightbox>
                    </SwiperSlide>
                ))}
            </Swiper>






            <div className="degrade"></div>
        </section>



    );



}

export default CardStand;