import React from 'react'
import './Categories.css'

const Categories = (props) =>{

    return(
        <ul>
            {props.categories.map((c) => {
                return <li>{c}</li>
            })}
        </ul>
    )
}

export default Categories;