import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonsPage from '../Pages/PokemonsPage';

export const NavBar = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><Link to="/">Pokemons List</Link></Nav.Link>
                        <Nav.Link href="#action2">Movies Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <PokemonsPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar