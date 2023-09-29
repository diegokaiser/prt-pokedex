import PropTypes from 'prop-types'

function Picture ({ name, sprites }) {
  return (
    <>
      <figure>
        <img src={sprites} alt={name} />
      </figure>
      <div className="pokedex__name">
        {name}
      </div>
    </>
  )
}

Picture.propTypes = {
  name: PropTypes.string,
  sprites: PropTypes.shape({
    front_default: PropTypes.string
  })
}

export default Picture