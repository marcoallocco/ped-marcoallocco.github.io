import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import { Container, Grid, Row, Col, Navbar, Nav, Header, Avatar, Dropdown } from 'rsuite';

function MainNavigation() {
  return (
    <Container>
        <Header className={classes.header}>
            <Grid>
            <Navbar>
                <Nav pullRight className={classes.list}>
                    <Nav.Item as="div">
                        <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                        end
                        >
                        <span className="icon-home"></span>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="div">
                        <NavLink
                        to="/prenotazioni"
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                        >
                        <span className="icon-calendar"></span>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="div">
                    <NavLink
                        to="/avvisi"
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                        >
                        <span className="icon-alarm"></span>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="div" className={classes.userProfile}>
                        <Dropdown title={<Avatar circle src="./src/assets/profilo.jpeg" alt="@nomecognome" />}>
                            <Dropdown.Item>Profilo</Dropdown.Item>
                            <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                            <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                        </Dropdown>
                    </Nav.Item>
                </Nav>
            </Navbar>
            </Grid>
        </Header>
    </Container>
  );
}

export default MainNavigation;
