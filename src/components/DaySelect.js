import React from 'react';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { yearSelected, monthSelected, daySelected } from '../actions';
import { bindActionCreators } from 'redux';

//=================
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

//=================
const setDays = (props) => {
  return props.year ? Array.from(new Array(moment(props.year + "-" + props.month, "YYYY-MM").daysInMonth()), (value, counter) => {
    return counter + 1
  }) : Array.from(new Array(moment().daysInMonth()), (value, counter) => {
    return counter + 1
  });
}

//=================
const displayDays = (days) => {
  return (
    days ?
    days.map((day) =>
      <option key={ day } value={ day }>
          { day }
        </option>
    ) :
    null
  );
}

//=================
const DaySelect = (props) => {

  //---------------
  const eventHandler = (event) => {
    props.daySelected(event.target.value);
  }

  //---------------
  return (
    <FormControl className={useStyles().formControl}>
      <Select
        native
        value={props.day}
        onChange={eventHandler}
      >
      <option disabled hidden value=''>{ props.day } </option>
      { displayDays(setDays(props)) }
      </Select>
      <FormHelperText>Day</FormHelperText>
    </FormControl>
  );
};

//=================
//get reducers update value after action creator is updated
const mapStateToProps = (state) => {
  return {
    year: state.datepicker.yearSelected,
    month: state.datepicker.monthSelected,
    day: (state.datepicker.daySelected ? state.datepicker.daySelected : moment().date())
  }
}

//=================
//retrieve action creator functions
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    yearSelected,
    monthSelected,
    daySelected
  }, dispatch);
}

//=================
export default connect(mapStateToProps, mapDispatchToProps)(DaySelect);