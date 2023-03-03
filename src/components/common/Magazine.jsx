import {useState,useEffect} from 'react';
import classes from './Magazine.module.scss';
import { Container, Grid, Row, Col } from 'rsuite';
import Card from "../UI/Card"
import NewsCard from "../UI/NewsCard"

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Magazine = () => {
    const [data,setData]=useState([]);
    
    /* Call fake API (es. getNews) */
    const getData=()=>{
        fetch('/data/news.json'
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
            <Grid className={classes.bgBanner}>
                <Row className="row-margin">
                    <Col className={classes.colBlue} xs={24} md={24}>
                        <div className={classes.intestazione}>
                            <div>
                                <span className="circle-icon circle-icon--big circle-icon--blue"></span>
                                <span>Magazine</span>
                            </div>
                            <a href="#">Mostra tutti</a>
                        </div>
                        <div className={[classes.newsWrapper, 'hp-swiper'].join(' ')}>
                            <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1.5}
                            //navigation
                            pagination={{ clickable: true }}
                            
                            breakpoints={{
                                500: {
                                    slidesPerView: 1.5,
                                },
                                640: {
                                  slidesPerView: 2,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                }
                            }}
                            //scrollbar={{ draggable: true }}
                            //onSwiper={(swiper) => console.log(swiper)}
                            //onSlideChange={() => console.log('slide change')}
                            >
                            {
                            data && data.length>0 && data.map((item)=> (
                                <SwiperSlide key={item.id} >
                                    <NewsCard className={classes.courceCard} item={{
                                            class: "news",
                                            href: "#",
                                            imgUrl: item.urlThumb,
                                            imgAlt: "alt img news",
                                            title: item.title,
                                            body: item.body
                                            }}>
                                    </NewsCard>
                                </SwiperSlide>
                            ))
                            }
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Grid>
            
        </>
    );
  }
  
  export default Magazine;

