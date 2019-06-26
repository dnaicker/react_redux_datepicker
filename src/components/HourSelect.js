import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { hourSelected } from '../actions';
import { bindActionCreators } from 'redux';

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

const HourSelect = (props) => {
  const classes = useStyles();
  const hours = setHours();
  props.hourSelected();

  const eventHandler = (name) => (event) => {
    props.hourSelected(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        value={props.hour}
        onChange={eventHandler('hour')}
      >
      <option disabled hidden value=''>{ props.hour } </option>
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

const mapStateToProps = (state) => {
  return {
    hour: state.datepicker.hourSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hourSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HourSelect);