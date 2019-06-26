export function datepicker(state = {}, actions) {
  switch (actions.type) {
    case 'YEARS':
      return {
        ...state,
        years: actions.payload
      };
      break;
    case 'MONTHS':
      return {
        ...state,
        months: actions.payload
      };
      break;
    case 'DAYS':
      return {
        ...state,
        days: actions.payload
      };
      break;
    case 'HOURS':
      return {
        ...state,
        hours: actions.payload
      };
      break;
    case 'MINUTES':
      return {
        ...state,
        minutes: actions.payload
      };
      break;
    default:
      return { ...state };
      break;
  }
}