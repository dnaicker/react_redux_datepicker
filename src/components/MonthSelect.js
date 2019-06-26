import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { connect } from 'react-redux';
import { monthSelected } from '../actions';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const setMonths = () => {
  return Array.from(new Array(12), (value, counter) => {
    return counter + 1;
  });
}
const MonthSelect = (props) => {
  const classes = useStyles();
  const months = setMonths();

  //---------
  //event: handle dropdown change
  const eventHandler = (event) => {
    props.monthSelected(event.target.value);
  };

  //---------
  //display: set initial month 
  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={props.month}
        onChange={eventHandler}
      >
      <option disabled hidden value=''>{ props.month } </option>
      {
        months ?
          months.map((month) =>  
            <option key={month} value={month}>
              {month}
            </option>
          )
        : null
      }
      </Select>
      <FormHelperText>Month</FormHelperText>
    </FormControl>
  );
}


const mapStateToProps = (state) => {
  return {
    month: (state.datepicker.monthSelected ? state.datepicker.monthSelected : moment().month() + 1)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    monthSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelect);