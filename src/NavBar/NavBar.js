import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieSearchPage from '../Pages/MovieSearchPage';
import PokeinfoPage from '../Pages/PokeinfoPage';
import PokemonsPage from '../Pages/PokemonsPage';
import ClockJs from '../Components/Clock/ClockJs'
import  './Style.css'
import Page404 from '../Pages/Page404';

export const NavBar = () => {
    return (
        <Router>
            <Navbar bg="light">
               <ClockJs/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link  ><Link to="/" className="linkPages">Pokemons List</Link></Nav.Link>
                        <Nav.Link ><Link to="/Movie-search" className="linkPages">Movies Search</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/Movie-search">
                    <MovieSearchPage/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeinfoPage/>
                </Route>
                <Route exact path="/">
                    <PokemonsPage/>
                </Route>
                <Route>
                    <Page404/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar