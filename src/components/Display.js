import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import calculate from '../utils/calculation';

const styles = theme => ({
    width: {
      ...theme.mixins.gutters(),
      width: 300,
      minHeight: 150
    }
  });

const Display = ({ instruction, classes }) => {
  return (
    <Paper className={classes.width}>
        <Typography variant='h4' component='h4' align='right' color='textSecondary' gutterBottom>
          {instruction || 'Calculate'}
        </Typography>
        <Divider variant='middle' />
        <Typography variant='h5' component='h5' align='right' color='primary'>
          {calculate(instruction) || !instruction && 'Press any button...'}
        </Typography>
    </Paper>
  );
};
Display.propTypes = {
  instruction: PropTypes.string,
  classes: PropTypes.object
};
const mapStateToProps = state => ({
  instruction: state.calc.instruction
});

const styledComponent = withStyles(styles)(Display);
export default connect(mapStateToProps)(styledComponent);
