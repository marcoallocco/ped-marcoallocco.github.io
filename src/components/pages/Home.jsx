import { Container, Grid, Row, Col } from 'rsuite';
import TopHp from "../hp-comp/TopContent"

import banner1 from '../../assets/banner/1.png';
import banner2 from '../../assets/banner/2.png';
import Alerts from "../hp-comp/Alerts";
import Magazine from "../common/Magazine";
import BannerFullWidth from "../UI/BannerFullWidth";

function HomePage() {
    return (
        <>
            <TopHp></TopHp>
            <Grid>
                <Row className="row-margin">
                    <Col xs={24} md={24}>
                    <BannerFullWidth
                        item={{
                        class: "banner",
                        href: "#",
                        imgUrl: banner1,
                        imgAlt: "Banner1",
                        }}
                    />
                    </Col>
                </Row>
            </Grid>
            <Alerts></Alerts>
            <Grid>
                <Row className="row-margin">
                    <Col xs={24} md={24}>
                    <BannerFullWidth
                        item={{
                        class: "banner",
                        href: "#",
                        imgUrl: banner2,
                        imgAlt: "Banner2",
                        }}
                    />
                    </Col>
                </Row>
            </Grid>
            <Magazine></Magazine>
        </>
    );
  }
  
  export default HomePage;