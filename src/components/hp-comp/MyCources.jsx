import {useState,useEffect} from 'react';
import classes from './MyCources.module.scss';
import { Container, Grid, Row, Col } from 'rsuite';
import ProdCard from "../UI/ProdCard"

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const MyCources = () => {
    const [data,setData]=useState([]);

    /* Call fake API (es. getMyCources) */
    const getData=()=>{
        fetch('/data/myCources.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            //console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            //console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (
        <>
            <div className='swiper-cources-wrapper'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                //navigation
                pagination={{ clickable: true }}
                
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 2,
                    }
                }}
                //scrollbar={{ draggable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
                >
                {
                data && data.length>0 && data.map((item)=> (
                    <SwiperSlide key={item.id} >
                        <ProdCard key={item.id} className={classes.courceCard} item={{
                            class: "prod",
                            href: "#",
                            imgUrl: item.urlThumb,
                            imgAlt: "alt img news",
                            title: item.title,
                            body: item.body,
                            durata: item.durata,
                            oraInizio: item.oraInizio,
                            oraFine: item.oraFine,
                            club: item.club,
                            sala: item.sala,
                            data: item.data
                            }}>
                        </ProdCard>
                    </SwiperSlide>
                ))
                }
                </Swiper>
            </div>
        </>
    );
  }
  
  export default MyCources;

