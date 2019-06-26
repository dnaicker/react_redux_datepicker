import React from 'react';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

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

export default function YearSelect(props) {
  const classes = useStyles();
  const years = setYears();
  const yearSelected = props.yearSelected ? props.yearSelected : moment().year();

  //---------
  //struct: state
  const [state, setState] = React.useState({
    year: ''
  });

  //---------
  const eventHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value
    })

    props.yearEventHandler(event);
  }

  //---------
  //display: list of years
  return (
    <FormControl className={classes.formControl}>
      <Select
          native
          value={state.year}
          onChange={eventHandler('year')}>
        <option disabled hidden value=''>{ yearSelected } </option>
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