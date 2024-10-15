import React, { createContext, useContext, useEffect } from 'react'
import './HomeScreen.css'
import SportCard from '../Sports/SportCard'
import { Link } from 'react-router-dom'
import { SportsContext } from '../SportsContext'

import { useState } from 'react'
import { SportsDTO } from '../../DTOs/SportsDTO'


export const HomeScreen = () => {



    const [sports, setSports] = useContext(SportsContext)

    useEffect(() => {
        fetch("http://localhost:3000/api/games", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSports(data)
            })

    }, [])

    return (
        <>
            <div>
                <h1>Juegos Olimpícos 2024</h1>
            </div>
            <Link to="/addSport">
                <button className='addButton'>
                    Agregar Deporte
                </button>
            </Link>
            <div className='sportsContent'>
                {sports && sports.map((data: any) => <SportCard id={data.id} key={data.id} {...data} />)}

            </div>
        </>
    )
}



export default HomeScreen