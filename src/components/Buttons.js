import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import * as actions from '../actions/calculate';
import { bindActionCreators } from 'redux';
import FabBtn from './core/FabBtn';

const btnConf = [
  {
    content: '1',
    value: 1
  },
  {
    content: '2',
    value: 2
  },
  {
    content: '3',
    value: 3
  },
  {
    content: '/',
    color: 'secondary',
    value: '/'
  },
  {
    content: '4',
    value: 4
  },
  {
    content: '5',
    value: 5
  },
  {
    content: '6',
    value: 6
  },
  {
    content: '*',
    color: 'secondary',
    value: '*'
  },
  {
    content: '7',
    value: 7
  },
  {
    content: '8',
    value: 8
  },
  {
    content: '9',
    value: 9
  },
  {
    content: '-',
    color: 'secondary',
    value: '*'
  },
  {
    content: <Icon>delete</Icon>,
    color: 'secondary',
    value: 'delete'
  },
  {
    content: '0',
    value: 5
  },
  {
    content: '^',
    color: 'secondary',
    value: '^'
  },
  {
    content: '+',
    color: 'secondary',
    value: '+'
  }
];
const Buttons = ({ append, deleteData }) => {
  const clickHandler = e => {
    const data = e.target.value || e.target.textContent;
    switch (data) {
      case 'delete':
        deleteData();
        break;
      default:
        append(data);
    }
  };
  return (
    <Paper>
      <Grid container spacing={16} onClick={clickHandler}>
        {btnConf.map((conf, index) => (
          <Grid item xs={3} key={index}>
            <FabBtn {...conf} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

Buttons.propTypes = {
  append: PropTypes.func,
  deleteData: PropTypes.func
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Buttons);
