import { NavLink } from 'react-router-dom';
import classes from './Alerts.module.scss';
import { Container, Grid, Row, Col, Panel, PanelGroup, Placeholder } from 'rsuite';

const Alerts = () => {
    const title1 = "Chiusura straordinaria per vacanze di Natale"
    const title2 = "Chiusura straordinaria per vacanze di Natale"
    return (
        <>
            <Grid className={classes.bgBanner}>
                <Row className="row-margin">
                    <Col className={classes.colBlue} xs={24} md={24}>
                        <div className={classes.intestazione}>
                            <div>
                                <span className="icon-alarm"></span>
                                <span>Avvisi</span>
                            </div>
                            <NavLink
                                to="/avvisi"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                >
                                Mostra tutti
                            </NavLink>
                        </div>
                        <PanelGroup accordion defaultActiveKey={1} bordered>
                            <Panel header={title1} eventKey={1} id="panel1" className='t-left'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Panel>
                            <Panel header={title2} eventKey={2} id="panel2" className='t-left'>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </PanelGroup>
                    </Col>
                </Row>
            </Grid>
            
        </>
    );
  }
  
  export default Alerts;

