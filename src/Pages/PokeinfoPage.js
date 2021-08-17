import React from 'react'
import { useParams } from 'react-router-dom'

export const PokeinfoPage = () => {
    const {id}=useParams();

    return (
        <div>
            <h1>Poke Info Page</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default PokeinfoPage