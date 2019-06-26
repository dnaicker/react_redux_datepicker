import React from 'react';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { yearSelected } from '../actions';
import { bindActionCreators } from 'redux';

//=================
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

//=================
const setYears = () => {
  return Array.from(new Array(20), (value, counter) => {
    return moment().year() + counter;
  });
}

//=================
const displayYears = (years) => {
  return (
    years ?
    years.map((year) =>
      <option key={ year } value={ year }>
          { year }
        </option>
    ) : null
  );
}

//=================
const YearSelect = (props) => {

  //---------------
  const eventHandler = (event) => {
    props.yearSelected(event.target.value);
  }

  //---------------
  return (
    <FormControl className={useStyles().formControl}>
      <Select
          native
          value={props.year}
          onChange={eventHandler}>
        <option disabled hidden value=''> { props.year } </option>
        { displayYears(setYears()) }
      </Select>
      <FormHelperText>Year</FormHelperText>
    </FormControl>
  );
}

//=================
const mapStateToProps = (state) => {
  return {
    year: (state.datepicker.yearSelected ? state.datepicker.yearSelected : moment().year())
  }
}

//=================
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    yearSelected
  }, dispatch);
}

//=================
export default connect(mapStateToProps, mapDispatchToProps)(YearSelect);