import { INIT_CUSTOMER } from '../type';
import { CustomerType } from './../../dataType/custormer';
const initState: CustomerType = {
  customer_name: 'Tuan ',
  customer_id: 1,
  customer_phone: '0987765423',
  customer_address: 'NAM DINH',
  amount_debt: 100,
}

export default function customer(state = initState, action: any) {
  switch (action.type) {
    case INIT_CUSTOMER: {
      return { ...action.payload }
    }
    default:
      return state;
  }
}