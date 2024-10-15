import React, { createContext, useContext, useEffect } from 'react'
import './HomeScreen.css'
import SportCard from '../Sports/SportCard'
import { Link } from 'react-router-dom'
import { SportsContext } from '../SportsContext'

import { useState } from 'react'
import { SportsDTO } from '../../DTOs/SportsDTO'


export const HomeScreen = () => {


    const [sports, setSports] = useContext(SportsContext)


    return (
        <>
            <div>
                <h1>Juegos Olimpícos 2024</h1>
            </div>
            <button className='addButton'>
                <Link to="/addSport">Agregar Deporte</Link>
            </button>
            <div className='sportsContent'>
                {sports && sports.map((data: any) => <SportCard id={data.id} key={data.id} {...data} />)}

            </div>
        </>
    )
}



export default HomeScreen