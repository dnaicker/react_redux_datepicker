import React from 'react';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { yearSelected, monthSelected, daySelected } from '../actions';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const DaySelect = (props) => {
  props.daySelected();
  const classes = useStyles();
  const days = props.year ? Array.from(new Array(moment(props.year + "-" + props.month, "YYYY-MM").daysInMonth()), (value, counter) => {
    return counter + 1
  }) : Array.from(new Array(moment().daysInMonth()), (value, counter) => {
    return counter + 1
  });

  const eventHandler = (name) => (event) => {
    props.daySelected(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={props.day}
        onChange={eventHandler('day')}
      >
      <option disabled hidden value=''>{ props.day } </option>
      {
        days ? 
          days.map((day) =>  
            <option key={day} value={day}>
              {day}
            </option>
          )
        : null
      }
      </Select>
      <FormHelperText>Day</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    year: state.datepicker.yearSelected,
    month: state.datepicker.monthSelected,
    day: state.datepicker.daySelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    yearSelected,
    monthSelected,
    daySelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySelect);