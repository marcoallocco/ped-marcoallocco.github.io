import classes from './MainFooter.module.scss';
import { Container, Grid, Row, Col } from 'rsuite';

import fbImg from "/assets/footer/fb.svg"
import instImg from "/assets/footer/inst.svg"
import ytbImg from "/assets/footer/ytb.svg"

const MainFooter = () => {
    return (
        <>
            <Grid className={classes.mainFooter}>
                <Row className="row-margin mb-1">
                    <Col className={classes.colBlue} xs={24} md={24}>
                        <div className={[classes.footerRow, "d-flex align-items-center justify-content-end"].join(' ')}>
                        <div className={classes.footerLinks}>
                            <ul className='d-flex '>
                                <li>
                                    <a href="#">
                                        <img src={fbImg} alt="Facebook logo link"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={instImg} alt="Instagram logo link"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={ytbImg} alt="Youtube logo link"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className='t-right'>Made by <a href="#"><strong>PED</strong></a></p>
                        </div>
                    </Col>
                </Row>
            </Grid>
            
        </>
    );
  }
  
  export default MainFooter;

