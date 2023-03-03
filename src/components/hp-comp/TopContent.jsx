import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './TopContent.module.scss';
import { Container, Grid, Row, Col } from 'rsuite';
import MyCources from './MyCources';
import MyPendingCources from './MyPendingCources';

const TopContent = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    
    const [numberOfPendings, setUseNumberOfPendings] = useState(0);

    const setNumberOfPendings = (value) => {
        setUseNumberOfPendings(value);
    }
    return (
        <>
            <Grid fluid className={classes.bgBanner}>
                <Row className={classes.row}>
                <Col className={classes.colBlue} xs={12} md={12}>
                    
                </Col>
                <Col className={classes.colGreen} xs={12} md={12}>
                    
                </Col>
                </Row>
            </Grid>
            {isAuth && (
                <Grid>
                <Row>
                <Col className={[classes.box, classes.boxAttivita].join(' ')} xs={24} md={11}>
                    <h4 className='t-left'><span className="icon-calendar"></span>Le tue prossime attività</h4>
                    <MyCources></MyCources>
                </Col>
                <Col className={[classes.box, classes.boxAttivita, "hidden-medium"].join(' ')} xs={24} md={2}>
                    
                </Col>
                <Col className={[classes.box, classes.boxAttesa].join(' ')} xs={24} md={11}>
                    <h4 className='t-left'>Hai {numberOfPendings} attività in lista d'attesa</h4>
                    <MyPendingCources setNumberOfPendings={setNumberOfPendings}></MyPendingCources>
                </Col>
                </Row>
                </Grid>  
            )}
        </>
    );
  }
  
  export default TopContent;