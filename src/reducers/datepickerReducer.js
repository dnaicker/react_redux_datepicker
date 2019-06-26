export default function(state = {}, actions) {
  switch (actions.type) {
    case 'YEARSELECTED':
      return {
        ...state,
        yearSelected: actions.payload
      };
    case 'MONTHSELECTED':
      return {
        ...state,
        monthSelected: actions.payload
      };
    case 'DAYSELECTED':
      return {
        ...state,
        daySelected: actions.payload
      };
    case 'HOURSELECTED':
      return {
        ...state,
        hourSelected: actions.payload
      };
    case 'MINUTESELECTED':
      return {
        ...state,
        minuteSelected: actions.payload
      };
    default:
      return { ...state };
  }
}