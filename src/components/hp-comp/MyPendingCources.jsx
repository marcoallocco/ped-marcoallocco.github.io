import {useState,useEffect} from 'react';
import classes from './MyPendingCources.module.scss';
import { Container, Grid, Row, Col } from 'rsuite';
import ProdCard from "../UI/ProdCard"

const MyPendingCources = (props) => {
    const [data,setData]=useState([]);

    /* Call fake API (es. getPendingCources) */
    const getData=()=>{
        fetch('./src/data/pendingCources.json'
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
        getData();
        props.setNumberOfPendings(data.length);
    },[data])
    
    return (
        <>
        {
            data && data.length>0 && data.map((item)=> (
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
                    data: item.data,
                    numeroPending: item.numeroPending
                    }}>
                </ProdCard>
            ))
        }    
        </>
    );
  }
  
  export default MyPendingCources;

