import { AuthType } from "../../dataType/auth";
import { LOGIN } from "../type";

const initAuth: AuthType = {
  user_name: 'Tuấn ',
  password: '123123',
  email: 'tuannv@medlink.vn',
  phone_no: '0857847685',
}

export default function auth(state = initAuth, action: any) {
  switch (action.type) {
    case LOGIN:
      return { ...action.payload }
    default:
      return state;
  }
}