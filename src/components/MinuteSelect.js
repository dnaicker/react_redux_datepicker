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


const setMinutes = () => {
  return Array.from(new Array(60), (value, counter) => {
    return counter + 1;
  });
}

export default function MinuteSelect(props) {
  const classes = useStyles();
  const minutes = setMinutes();
  const minuteSelected = props.minuteSelected ? props.minuteSelected : moment().minutes();

  //---------
  //struct: 
  const [state, setState] = React.useState({
    minute: ''
  });

  //---------
  //event: handle date change
  const eventHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value
    });

    props.minuteEventHandler(event);
  }

  //---------
  //render: list of days and set current date
  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={state.minute}
        onChange={eventHandler('minute')}
      >
      <option disabled hidden value=''>{ minuteSelected } </option>
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