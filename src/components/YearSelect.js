import React from 'react';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { yearSelected } from '../actions';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const setYears = () => {
  return Array.from(new Array(20), (value, counter) => {
    return moment().year() + counter;
  });
}

const YearSelect = (props) => {
  const classes = useStyles();
  const years = setYears();

  const eventHandler = (event) => {
    props.yearSelected(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
          native
          value={props.year}
          onChange={eventHandler}>
        <option disabled hidden value=''>{ props.year } </option>
        { 
          years ?
            years.map( (year) => 
              <option key={year} value={year}>
                {year}
              </option>
            ): null
        }
      </Select>
      <FormHelperText>Year</FormHelperText>
    </FormControl>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    year: (state.datepicker.yearSelected ? state.datepicker.yearSelected : moment().year())
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    yearSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YearSelect);