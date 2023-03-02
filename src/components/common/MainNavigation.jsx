import { NavLink } from 'react-router-dom';
import { authActions } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'rsuite';

import classes from './MainNavigation.module.scss';
import { Container, Grid, Row, Col, Navbar, Nav, Header, Avatar, Dropdown } from 'rsuite';

function MainNavigation() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };
    const loginHandler = () => {
        dispatch(authActions.login());
        
    };

  return (
    <Container>
        <Header className={classes.header}>
            <Grid>
                <Navbar>
                    {isAuth && (
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
                            <Nav.Menu className={classes.dropdown} title={<Avatar circle src="/assets/profilo.jpeg" alt="@nomecognome" />}>
                                <Nav.Item className={classes.dropdownItem}>Profilo</Nav.Item>
                                <Nav.Item className={classes.dropdownItem}>Lorem ipsum</Nav.Item>
                                <Nav.Item className={classes.dropdownItem}>
                                    <Button className={classes.btn} onClick={logoutHandler}>Logout</Button>
                                </Nav.Item>
                            </Nav.Menu>
                        </Nav.Item>
                    </Nav>
                    )}
                    {!isAuth && (
                        <Nav pullRight className={classes.list}>
                            <Nav.Item as="div">
                                <Button className={classes.btn} onClick={loginHandler}>Login</Button>
                            </Nav.Item>
                        </Nav>
                    )}
                </Navbar>
            </Grid>
        </Header>
    </Container>
  );
}

export default MainNavigation;
