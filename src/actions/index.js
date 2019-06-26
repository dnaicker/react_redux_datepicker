import moment from 'moment';

export function yearSelected(year = moment().year()) {
  return {
    type: 'YEARSELECTED',
    payload: year
  }
}

export function monthSelected(month = (moment().month() + 1)) {
  return {
    type: 'MONTHSELECTED',
    payload: month
  }
}

export function daySelected(day = moment().date()) {
  return {
    type: 'DAYSELECTED',
    payload: day
  }
}

export function hourSelected(hour = moment().hours()) {
  return {
    type: 'HOURSELECTED',
    payload: hour
  }
}

export function minuteSelected(minute = moment().minutes()) {
  return {
    type: 'MINUTESELECTED',
    payload: minute
  }
}