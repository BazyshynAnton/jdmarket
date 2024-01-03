import { useDispatch, React } from '../../shared/utils/reactImports'
import { setSearchInput } from '../headerSlice'

import styles from '../Header.module.scss'

const HelperForSearch = ({ filteredCars }) => {
  const dispatch = useDispatch()

  const nodeRef = React.useRef(null)

  return (
    <div
      ref={nodeRef}
      style={{
        maxHeight: '200px',
        position: 'absolute',
        bottom: '100',
        background: '#fff',
        zIndex: '999999999',
        width: '230px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '5px',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '12px',
        overflow: 'hidden',
      }}
    >
      {filteredCars.map((car) => (
        <p
          onClick={() => dispatch(setSearchInput(car.text))}
          className={styles.hoverForHelpSearchMenu}
          key={car.id}
        >
          {car.text}
        </p>
      ))}
      {filteredCars.length === 19 && (
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            width: '100%',
            height: '25px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '15px',
            cursor: 'default',
          }}
        >
          <span style={{ padding: '0px 10px 0px 0px' }}>...</span>
        </div>
      )}
    </div>
  )
}

export default HelperForSearch
