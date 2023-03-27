import React from "react";
import { FaMapPin } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import fetchApi from '../services/api';
function Home () {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const handleChange = ({ target }) => {
        setSearch(target.value)
    }

    const handleClick = async () => {
        const dataResult = await fetchApi(search)
        console.log(dataResult);
        if (dataResult.cod === '400') {
            navigate('/NotFound')
        }
        setData(dataResult)
        setLoading(false)
    }


    return (
        <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center'>
            <div className='bg-white p-20 rounded-xl shadow-lg'>
                <h1 className='mb-12 text-center font-bold text-2xl'>Confira o Clima de uma Cidade</h1>
                <div className='text-center'>
                    <input
                        type="text"
                        placeholder="Digite o nome da Cidade"
                        value={search}
                        onChange={handleChange}
                        name="search"
                        className="border-solid border-2 border-indigo-300 rounded-xl w-48 mb-5 "
                    />

                    <button type="button"
                        onClick={handleClick}
                        className='ml-4'
                    >
                        <FaSearch />
                    </button>
                </div>
                {
                    loading ? <div className='text-center mt-8'><span>Wather App</span></div> :
                        <div className='flex justify-center flex-col items-center'>
                            <FaMapPin /><span>{data?.name}</span>
                            <h1>Temperatura: {`${data.main?.temp} ºC`}</h1>
                            <div>Humidade: {data.main?.humidity}</div>
                            <div>Tempo:{data.weather[0]?.description}</div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Home;