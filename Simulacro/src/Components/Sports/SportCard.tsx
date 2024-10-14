import React, { useContext } from 'react'
import './SportCard.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { SportsDTO } from '../../DTOs/SportsDTO'
import { SportsContext } from '../SportsContext'



export const SportCard = (dataDTO: SportsDTO) => {

    const [sports, setSports] = useContext(SportsContext)

    const route = `/games/${dataDTO.id}`



    const handleDelete = () => {

        fetch(`http://localhost:3000/api/games/${dataDTO.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('Deleted')
                setSports(data)
            })
    }

    return (
        <>
            <div className='sportsCard'>
                <h2>{dataDTO.title}</h2>
                <div className='sportsCardButtons'>
                    <button>
                        <Link to={route}> Detalles </Link>
                    </button>
                    <button onClick={handleDelete}>Borrar</button>
                </div>

            </div>
        </>
    )
}



export default SportCard