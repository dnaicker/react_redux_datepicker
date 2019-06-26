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

export default function DaySelect(props) {
  const classes = useStyles();

  const days = Array.from(new Array(moment(props.yearSelected + "-" + props.monthSelected, "YYYY-MM").daysInMonth()), (value, counter) => {
    return counter + 1;
  });

  const daySelected = props.daySelected ? props.daySelected : moment().date();

  //---------
  //struct: 
  const [state, setState] = React.useState({
    day: ''
  });

  //---------
  //event: handle date change
  const eventHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value
    });

    props.dayEventHandler(event);
  }

  //---------
  //render: list of days and set current date
  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={state.day}
        onChange={eventHandler('day')}
        hintStyle = {{backgroundColor: '#ffffff', zIndex: 1, pointerEvents: 'none',  width: '85%'}}
      >
      <option disabled hidden value=''>{ daySelected } </option>
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