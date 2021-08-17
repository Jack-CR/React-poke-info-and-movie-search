import React, { useEffect, useState } from 'react'
import { FormControl, Container, Row, Col, Button,Form } from 'react-bootstrap'
import axios from 'axios'
import CardMovieComponent from '../Components/Card/CardMovieComponent';

export const MovieSearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [movieName, setmovieName] = useState("");

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
        .then((res)=>{
            return res.data;
        })
        .then((json)=>{
            setMovies(json);
        })
       
    }, [movieName])

    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                onChange={(e)=>setmovieName(e.target.value)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                   {
                       movies.map((el,key)=>{
                           return(
                               <Col key={key}>
                                  <CardMovieComponent movie={el}/>
                               </Col>
                           )
                       })
                   }
                </Row>
            </Container>

        </>
    )
}

export default MovieSearchPage