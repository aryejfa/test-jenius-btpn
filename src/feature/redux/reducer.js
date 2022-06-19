import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import contactadd from '../contactadd/ContactaddState';
import contactlist from '../contactlist/ContactlistState';
import splashScreen from '../splashScreen/SplashScreenState';
import app from '../AppState';

export default combineReducers({
  // ## Generator Reducers
  contactadd,
  contactlist,
  splashScreen,
  app,
});
