import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Buttons from '../components/Buttons';
import Display from '../components/Display';
import { withStyles } from '@material-ui/core/styles';
import './Panel.scss';

const styles = theme => ({
    width: {
      ...theme.mixins.gutters(),
      width: 400
    }
  });
const Panel = ({classes}) => {
  return (
    <div className='panel'>
      <div className='content'>
        <Grid container direction='column' justify='center' className={classes.width}>
          <Display />
          <Buttons />
        </Grid>
      </div>
    </div>
  );
};
Panel.propTypes = {
    classes: PropTypes.object
  };
export default withStyles(styles)(Panel);
