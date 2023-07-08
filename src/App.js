import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import UserProfile from './components/UserProfile'

function App() {
const isAuth=useSelector(state=>state.auth.isAuthenticated)

  return (
    <>
    <Header></Header>
   {!isAuth&& <Auth></Auth>}
   {isAuth&& <UserProfile></UserProfile>}
    <Counter />
    </>
  );
}

export default App;
