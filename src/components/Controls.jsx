import {
  FaCircleArrowUp, 
  FaCircleArrowRight, 
  FaCircleArrowDown, 
  FaCircleArrowLeft,
  FaCircle } 
from 'react-icons/fa6'

function Controls () {
  return (
    <div className="pokedex__actions">
      <button 
        type="button"
      >
        <FaCircleArrowUp />
      </button>
      <button 
        type="button"
      >
        <FaCircleArrowLeft />
      </button>
      <button disabled="disabled">
        <FaCircle />
      </button>
      <button 
        type="button"
      >
        <FaCircleArrowRight />
      </button>
      <button 
        type="button"
      >
        <FaCircleArrowDown />
      </button>
      
      
    </div>
  )
}

export default Controls