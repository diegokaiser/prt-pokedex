import {
  FaCircleXmark
}
from 'react-icons/fa6'

function Error() {
  return (
    <div className="alerts">
      <div className="alerts__content">
        <FaCircleXmark />
        <p>:( Error al recuperar datos</p>
      </div>
    </div>
  )
}

export default Error