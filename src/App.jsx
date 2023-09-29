import { useState } from 'react'
import { useFetch } from './hooks/useFetch.js'
import './App.scss'
import {
  FaCircleArrowUp, 
  FaCircleArrowRight, 
  FaCircleArrowDown, 
  FaCircleArrowLeft,
  FaCircle } 
from 'react-icons/fa6'
import Loading from './components/Loading'
import Error from './components/Error'

function App () {
  const [id, setId] = useState(1)
  const [info, setInfo] = useState(true)

  const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
  const API = `${API_URL}${id}/`
  const { data, loading, error } = useFetch(API)

  const pokemon = { ...data}
  const { name, sprites, types, abilities, weight, height } = pokemon

  const nextPokemon = (e) => {
    e.preventDefault()
    if (id < 151) {
      setId(id + 1)
    }
  }
  const prevPokemon = (e) => {
    e.preventDefault()
    if (id > 1) {
      setId(id - 1)
    }
  }
  const showInfo = (e) => {
    e.preventDefault()
    setInfo(false)
  }
  const showPicture = (e) => {
    e.preventDefault()
    setInfo(true)
  }

  return (
    <div className="main">
      <div className="main__content">
        <div className="pokedex">
          <div className="pokedex__content">
            <div className="pokedex__data">
              <div className="pokedex__screen">
                {loading
                  ? <Loading />
                  :
                  info
                    ?
                    <>
                      <figure>
                        <img src={sprites.front_default} alt={name} />
                      </figure>
                      <div className="pokedex__name">
                        {name}
                      </div>
                    </>
                    :
                    <>
                      <div className="pokedex__info">
                        <h4>
                          {name}
                        </h4>
                        <div className="info__data">
                          <figure>
                            <img src={sprites.front_default} alt={name} />
                          </figure>
                          <ul>
                            <li>
                              <strong>Type: </strong> 
                              <span className="items">
                                {types.map(type => (
                                  <span className='item' key={type.type.name}>{type.type.name}</span>
                                ))}
                              </span>
                            </li>
                            <li>
                              <strong>Weight: </strong> 
                              <span className="items">
                                <span className='item'>{weight}</span> 
                              </span>
                            </li>
                            <li>
                              <strong>Height: </strong> 
                              <span className="items">
                                <span className='item'>{height}</span>
                              </span>
                            </li>
                            <li>
                              <strong>Abilities: </strong> 
                              <span className="items">
                                {abilities.map(ability => (
                                  <span className='item' key={ability.ability.name}>{ability.ability.name}</span>
                                ))}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                }
                {error && <Error />}
              </div>
            </div>
            <div className="pokedex__actions">
              <button 
                type="button"
                onClick={nextPokemon}
                disabled={!info}
              >
                <FaCircleArrowUp />
              </button>
              <button 
                type="button"
                onClick={showPicture}
                disabled={info}
              >
                <FaCircleArrowLeft />
              </button>
              <button disabled="disabled">
                <FaCircle />
              </button>
              <button 
                type="button"
                onClick={showInfo}
                disabled={!info}
              >
                <FaCircleArrowRight />
              </button>
              <button 
                type="button"
                onClick={prevPokemon}
                disabled={!info}
              >
                <FaCircleArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
