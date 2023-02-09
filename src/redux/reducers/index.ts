import { CustomerType } from './../../dataType/custormer';
import { combineReducers } from "redux";
import customer from "./customer";

export type RootState = {
  customer: CustomerType
}
const rootReducers = combineReducers({
  customer,
});

export default rootReducers;