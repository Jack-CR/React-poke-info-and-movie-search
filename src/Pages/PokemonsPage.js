import React, { useEffect,  useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardComponent from '../Components/Card/CardComponent';
import LoadingComponent from '../Components/Loading/LoadingComponent';


export const PokemonsPage = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async (url) => {
          let res = await fetch(url),
            json = await res.json();
          //console.log(json);
    
          json.results.forEach(async (el) => {
            let res = await fetch(el.url),
              json = await res.json();
    
            //console.log(json);
            let pokemon = {
              id: json.id,
              name: json.name,
              avatar: json.sprites.front_default,
            };
    
            setPokemons((pokemons) => [...pokemons, pokemon]);
          });
        };
    
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
      }, []);
   


    return (
        <Container className="">
            <Row>
                <Col>
                    <h1>Pokemon</h1>
                </Col>
            </Row>
            <Row>
                {pokemons.length===0
                    ?<LoadingComponent/>
                    :pokemons.map((el, key) => {
                        return (
                            <Col key={key}>
                                <CardComponent pokemon={el} />
                            </Col>
                        )
                    })
                }
              
            </Row>
        </Container>
    )
}

export default PokemonsPage