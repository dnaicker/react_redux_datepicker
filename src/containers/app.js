import React, { Component } from 'react';
import YearSelect from '../components/YearSelect.js';
import MonthSelect from '../components/MonthSelect.js';
import DaySelect from '../components/DaySelect.js';
import HourSelect from '../components/HourSelect.js';
import MinuteSelect from '../components/MinuteSelect.js';

import { connect } from 'react-redux';
import { yearslist, hourslist } from '../actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';

//-------
//send through month and year to DaySelect to determine leap year and month value
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearSelected: moment().year(),
      monthSelected: (moment().month() + 1),
      daySelected: moment().date(),
      hourSelected: moment().hours(),
      minuteSelected: moment().minutes()
    }
  }
  componentWillMount() {}

  yearEventHandler = (event) => {
    this.setState({
      yearSelected: event.target.value
    }, function() {})
  }

  monthEventHandler = (event) => {
    this.setState({
      monthSelected: event.target.value
    }, function() {})
  }

  dayEventHandler = (event) => {
    this.setState({
      daySelected: event.target.value
    }, function() {})
  }

  hourEventHandler = (event) => {
    this.setState({
      hourSelected: event.target.value
    }, function() {})
  }

  minuteEventHandler = (event) => {
    this.setState({
      minuteSelected: event.target.value
    }, function() {})
  }

  //-------
  //pass through years, months, days, hours, minutes
  render() {
    return (
      <div className="App">
        <YearSelect years={this.props.years} yearEventHandler={this.yearEventHandler} ></YearSelect>
        <MonthSelect months={this.props.months} monthEventHandler={this.monthEventHandler}></MonthSelect>
        <DaySelect days={this.props.days} yearSelected={this.state.yearSelected} monthSelected={this.state.monthSelected} dayEventHandler={this.dayEventHandler}></DaySelect>
        <HourSelect hours={this.props.hours} hourEventHandler={this.hourEventHandler}></HourSelect>
        <MinuteSelect minutes={this.props.minutes} minuteEventHandler={this.minuteEventHandler}></MinuteSelect>
      </div>
    );
  }
}

//-------
//fields in state are derived from reducer returned payload object assigned field
const mapStateToProps = (state) => {
  return {
    years: state.datepicker.years,
    months: state.datepicker.months,
    days: state.datepicker.days,
    hours: state.datepicker.hours,
    minutes: state.datepicker.minutes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);