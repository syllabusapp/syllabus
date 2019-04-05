// @TODO create test
import {format} from 'date-fns';

export const year = (timestamp = new Date(), timezone = null) =>
  timezone ? format('YYYY') : format(timestamp, 'YYYY');
// !timezone ? format('YYYY') : format(timestamp, 'YYYY').tz(timezone);
// @TODO: handle timezone
