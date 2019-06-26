import React, { Component } from 'react';
import YearSelect from '../components/YearSelect.js';
import MonthSelect from '../components/MonthSelect.js';
import DaySelect from '../components/DaySelect.js';
import HourSelect from '../components/HourSelect.js';
import MinuteSelect from '../components/MinuteSelect.js';

class App extends Component {
  render() {
    return (
      <div>
        <YearSelect />
        <MonthSelect />
        <DaySelect />
        <HourSelect />
        <MinuteSelect />
      </div>
    );
  }
}

export default App;