import { useEffect, useState } from 'react';

import { Container, Grid, Row, Col } from 'rsuite';
import classes from './Prenotazioni.module.scss';
import CourcesList from './CourcesList'
import DatePicker from '../prenotazioni-comp/DatePicker';
import FiltersBar from '../prenotazioni-comp/FiltersBar';

const Prenotazioni = () => {

    const currentDate = new Date()
    currentDate.getDay()
    
    const [selectedPlace, setSelectedPlace] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedActivity, setSelectedActivity] = useState('all');

    const [selectedDay, setSelectedDate] = useState(currentDate);

    const handlePlaceChange = value => {
        setSelectedPlace(value);
    };
    const handleCategoryChange = value => {
        setSelectedCategory(value);
    };
    const handleActivityChange = value => {
        setSelectedActivity(value);
    };
    const handleDateChange = value => {
        setSelectedDate(value)
    }

    return (
        <>
            <Grid>
                <Row>
                    <Col className="col" xs={0} md={2}>
                        
                    </Col>
                    <Col className="col" xs={24} md={20}>
                        <DatePicker selectedDay={selectedDay} handleDateChange={handleDateChange}></DatePicker>
                    </Col>
                    <Col className="col" xs={0} md={2}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2}></Col>
                    <Col xs={20} md={20}>
                        <div className='filters-panel-wrapper'>
                            <FiltersBar handlePlaceChange={handlePlaceChange} handleCategoryChange={handleCategoryChange} handleActivityChange={handleActivityChange}></FiltersBar>
                        </div>
                    </Col>
                    <Col xs={2} md={2}></Col>
                </Row>
                <Row>
                    <Col className="col" xs={24} md={24}>
                        <div className='cources-wrapper'>
                            <CourcesList filterDateSelected={selectedDay} filterPlaceSelected={selectedPlace} filterCategorySelected={selectedCategory} filterActivitySelected={selectedActivity}/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </>
        
    );
  }
  
  export default Prenotazioni;