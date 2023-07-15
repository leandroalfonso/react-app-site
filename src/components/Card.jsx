import React, { useState } from 'react'
import Detalhes from './Detalhes'
import { FaWindowClose } from 'react-icons/fa';
const Card = ({ dados }) => {
    const [modal, setModal] = useState(false)
    const [foto, setFoto] = useState('')
    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')


    function getModal() {
        setModal(true)


    }

    return (
        <div className='container-card'>
            {
                dados === '' ? "carregando" : (
                    dados.map((item) => (
                        <div className='container-card'>
                            <div onClick={() => { getModal(), setFoto(item.foto), setNome(item.nome), setDesc(item.descricao) }} className='card' key={item.id}>
                                <img src={item.foto} />
                                <div className="content">
                                    <p>{item.nome}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            <div className={modal ? 'modal' : 'modal open'}>
                <p><FaWindowClose style={{width:'40px', height:'40px', color:'red', padding:'10px'}} onClick={() => { setModal(false) }} /></p>


                <div className='card-modal'>
                    <img  src={foto} />
                    <h3>{nome}</h3>
                    <hr></hr>
                    <hr></hr>
                    <p>{desc}</p>

                </div>
                <div className="quant">
                    <p>teste quantidade </p>

                </div>

            </div>
        </div>

    )
}

export default Card