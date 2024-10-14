import React, { useState, useEffect } from 'react'


import { Link, useParams } from 'react-router-dom'
import { SportsDTO } from '../../DTOs/SportsDTO'

import './DetailScreen.css'

export const DetailScreen = () => {

    const [data, setData] = useState<SportsDTO>()

    const id = useParams().id

    useEffect(() => {
        console.log(id)
        fetch(`http://localhost:3000/api/games/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(response => response.json())
            .then(data => {
                console.log(data[0])
                setData(data[0])
            })
    }, [])


    return (
        <>
            <button>
                <Link to="/">Atrás</Link>
            </button>
            <div className='sportsData'>
                <h1>{data ? data.title : "undefined"}</h1>
                <p>{data ? data.description : "undefined"}</p>
                <p>Cantidad de Jugadores: {data ? data.players : "undefined"}</p>
                <p>Categorías: {data ? data.categories : "undefined"}</p>
            </div>
        </>
    )
}


export default DetailScreen
