import { CustomerType } from './../../dataType/custormer';
import { combineReducers } from "redux";
import customer from "./customer";
import auth from './auth';

export type RootState = {
  customer: CustomerType
}
const rootReducers = combineReducers({
  customer,
  auth,
});

export default rootReducers;