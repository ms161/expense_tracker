import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from './Store/Store';
const Auth = () => {

const dispatch=useDispatch()
const auth=useSelector(state=>state.auth.isAuthenticated)//

const loginHandler=e=>{
  e.preventDefault()

  console.log('cliked')
  dispatch(authActions.login())
}
console.log(auth)

  return (
    <main className={classes.auth}>
   { !auth&&  <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>}
    </main>
  );
};

export default Auth;
