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

const setMonths = () => {
  return Array.from(new Array(12), (value, counter) => {
    return counter + 1;
  });
}
export default function MonthSelect(props) {
  const classes = useStyles();
  const months = setMonths();
  const monthSelected = props.monthSelected ? props.monthSelected : moment().month() + 1;

  //---------
  //struct: set state
  const [state, setState] = React.useState({
    month: ''
  });

  //---------
  //event: handle dropdown change
  const eventHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });

    props.monthEventHandler(event);
  };

  //---------
  //display: set initial month 
  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={state.month}
        onChange={eventHandler('month')}
      >
      <option disabled hidden value=''>{ monthSelected } </option>
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