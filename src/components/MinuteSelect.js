import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { minuteSelected } from '../actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';

//=================
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

//=================
const setMinutes = () => {
  return Array.from(new Array(60), (value, counter) => {
    return counter + 1;
  });
}

//=================
const displayMinutes = (minutes) => {
  return (
    minutes ?
    minutes.map((minute) =>
      <option key={minute} value={minute}>
            {minute}
          </option>
    ) :
    null
  )
}

//=================
const MinuteSelect = (props) => {

  //---------------
  const eventHandler = (event) => {
    props.minuteSelected(event.target.value);
  }

  //---------------
  return (
    <FormControl className={useStyles().formControl}>
      <Select
        native
        value={props.minute}
        onChange={eventHandler}
      >
      <option disabled hidden value=''>{ props.minute } </option>
      { displayMinutes(setMinutes()) }
      </Select>
      <FormHelperText>Minute</FormHelperText>
    </FormControl>
  );
};

//=================
const mapStateToProps = (state) => {
  return {
    minute: (state.datepicker.minuteSelected ? state.datepicker.minuteSelected : moment().minutes())
  }
}

//=================
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    minuteSelected
  }, dispatch);
}

//=================
export default connect(mapStateToProps, mapDispatchToProps)(MinuteSelect);