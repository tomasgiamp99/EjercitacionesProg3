import React from 'react'
function Tarjetas(props) {
    return (
        <div className="tarjetas">
            <ul className="personajes">
                <li>
                    <img className="tarjeta-img" src={props.datoSerie.image} alt=""/>
                </li>
                <li className="personaje-name">{props.datoSerie.name}</li>
                <li>{props.datoSerie.status}</li>
                <li>{props.datoSerie.species}</li>
                <li>{props.datoSerie.origin.name}</li>
            </ul>
        </div>
    )
}

export default Tarjetas