import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './login.scss'

function Login() {
  return (
    <div>
      <Button>Login</Button>
      <Link to='/'>Dashboard</Link>
      <h2 className='test'>Moi ban dang nhap de su dung</h2>
    </div>
  );
}

export default Login;