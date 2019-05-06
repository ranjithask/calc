import React from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab';

const FabBtn = (props)=> {
    const {content} = props;
  return (
    <Fab {...props}>
        {content}
      </Fab>
  )
}

FabBtn.propTypes = {
    color:PropTypes.string
}
FabBtn.defaultProps = {
    color:'primary'
}

export default FabBtn

