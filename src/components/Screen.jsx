import PropTypes from 'prop-types'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Picture from '../components/Picture'
import Info from '../components/Info'

function Screen({info, loading, error, name, sprites}) {
  console.log(sprites)
  return (
    <div className="pokedex__data">
      <div className="pokedex__screen">
        {loading && <Loading />}
        {error && <Error />}
        {info 
          ? <Picture name={name} />
          : <Info name={name} />
        }
      </div>
    </div>
  )
}

Screen.propTypes = {
  info: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.node,
  name: PropTypes.string,
  sprites: PropTypes.shape({
    front_default: PropTypes.string
  })
}

export default Screen