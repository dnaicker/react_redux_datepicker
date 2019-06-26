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

const setHours = () => {
  return Array.from(new Array(24), (value, counter) => {
    return counter + 1;
  });
}

export default function HourSelect(props) {
  const classes = useStyles();
  const hours = setHours();
  const hourSelected = props.hourSelected ? props.hourSelected : moment().hour();

  //---------
  //struct: 
  const [state, setState] = React.useState({
    hour: ''
  });

  //---------
  //event: handle date change
  const eventHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value
    });

    props.hourEventHandler(event);
  }

  //---------
  //render: list of days and set current date
  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={state.hour}
        onChange={eventHandler('hour')}
      >
      <option disabled hidden value=''>{ hourSelected } </option>
      {
        hours ? 
          hours.map((hour) =>  
            <option key={hour} value={hour}>
              {hour}
            </option>
          )
        : null
      }
      </Select>
      <FormHelperText>Hour</FormHelperText>
    </FormControl>
  );
};