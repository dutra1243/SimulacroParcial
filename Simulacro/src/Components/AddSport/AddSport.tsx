import React, { useContext, useState } from 'react'
import './AddSport.css'

import { Link } from 'react-router-dom'
import { SportsContext } from '../SportsContext'

export const AddSport = () => {

    const [sports, setSports] = useContext(SportsContext)

    const [cardData, setCardData] = useState<{
        title: string,
        description: string,
        players: string,
        categories: string
    }>({
        title: '',
        description: '',
        players: '',
        categories: ''
    })

    const handleAdd = () => {
        if (cardData.title === '' || cardData.description === '' || cardData.players === '' || cardData.categories === '') {
            alert('Por favor, complete todos los campos')
            return
        }
        fetch("http://localhost:3000/api/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title: cardData.title,
                    description: cardData.description,
                    players: cardData.players,
                    categories: cardData.categories
                })
        }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSports(data)
            })
    }

    return (
        <>
            <div>
                <h1 id="header">Agregar Deporte</h1>
            </div>
            <button className='addButton'>
                <Link to="/">Atrás</Link>
            </button>
            <div className='newSportForm'>
                <form className='Form'>
                    <label>Nombre del deporte:</label>
                    <input type="text" onChange={(event) => setCardData({ ...cardData, title: event.target.value })} />
                    <label>Descripción del deporte:</label>
                    <input type="text" onChange={(event) => setCardData({ ...cardData, description: event.target.value })} />
                    <label>Cantidad de Jugadores:</label>
                    <input type="number" onChange={(event) => setCardData({ ...cardData, players: event.target.value })} />
                    <label>Categorías:</label>
                    <input type="text" onChange={(event) => setCardData({ ...cardData, categories: event.target.value })} />
                    <button id='addButton' onClick={handleAdd}>Agregar</button>
                </form>
            </div>
        </>
    )
}


export default AddSport