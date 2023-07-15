import React from 'react'
import '../components/Bd.css'

import Card from '../components/Card'
const bd = () => {

    const dados = [
        {
            "id": "01",
            "nome": "Banana Nanica",
            "descricao": "Banana Doce mais macia",
            "foto": ""
        },
        {
            "id": "02",
            "nome": "Banana Caturra",
            "descricao": "Banana mais amarga",
            "foto": ""
        },
        {
            "id": "01",
            "nome": "Banana Prata",
            "descricao": "Banana Mais dura que o normal",
            "foto": ""
        }
    ]

    return (

        <Card dados ={dados}/>
    )
}

export default bd