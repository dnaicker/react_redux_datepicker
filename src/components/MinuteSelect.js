import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { minuteSelected } from '../actions';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const setMinutes = () => {
  return Array.from(new Array(60), (value, counter) => {
    return counter + 1;
  });
}

const MinuteSelect = (props) => {
  props.minuteSelected();
  const classes = useStyles();
  const minutes = setMinutes();
  const eventHandler = (name) => (event) => {
    props.minuteSelected(event.target.value);
  }


  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={props.minute}
        onChange={eventHandler('minute')}
      >
      <option disabled hidden value=''>{ props.minute } </option>
      {
        minutes ? 
          minutes.map((minute) =>  
            <option key={minute} value={minute}>
              {minute}
            </option>
          )
        : null
      }
      </Select>
      <FormHelperText>Minute</FormHelperText>
    </FormControl>
  );
};


const mapStateToProps = (state) => {
  return {
    minute: state.datepicker.minuteSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    minuteSelected
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MinuteSelect);