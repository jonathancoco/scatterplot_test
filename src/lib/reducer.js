import { week1Data } from './core';
import { month1Data } from './core';
import { month3Data } from './core';
import { month6Data } from './core';

export default (state = week1Data(), action) => {

  switch(action.type) {
    case 'WEEK1':
      return week1Data();
    case 'MONTH1':
      return month1Data();
    case 'MONTH3':
      return month3Data();
    case 'MONTH6':
      return month6Data();

  }
  return state;
}
