import React,{useReducer} from 'react';
import './App.css';
import{BrowserRouter, Route, Link, Navigate} from 'react-router-dom';
import Home from './Components/Home';


const initialState={
  name:'',
  email:'',
password:'',
passwordAgain:'',
terms:false
}
const reducer = (state: any,action:any) =>
{
  // if(action.input === 'name'){
    return{...state, [action.input]: action.value}
  
}

const validateState = (state: any) =>{
return state.password === state.passwordAgain 
&& state.terms 
&& state.password.length>3;
}
function App() {
  const[state,dispatch] = useReducer(reducer,initialState)

// console.log(state);

const handleClick = (e: any) =>{
e.preventDefault();
alert(`Hello ${state.name} you have successfully loggedin.....!!`)
}

// const validateEmail = (e: any) =>{
//  const{name} = e.target;
//  input: name,
//  value: name === 'email' && 
// }

  const onChange= (e: any) =>{
    const {name,value,checked} = e.target;
    const action ={
      // input: e.target.name,
      // value: e.target.value, // Destructured
      input : name,
      value: name === 'terms' ? checked : value,
        }
  dispatch(action);
  }

  return (
    <div className="App">
     <div className="LoginFormContainer">
      <h2 className='LoginFormHeading'>Register</h2>
      <form className='LoginForm'>
        <label></label>
        <input className='TextInput' type='text' name='name' required placeholder='Enter your name' onChange={onChange}
        />
        {/* <div className='error'>* Name field is required</div> */}
          <input
        className='TextInput'
        type='text'
        name='email'
       
        required
        placeholder='Enter your email'
        onChange={onChange}
        />
         {/* <div className='error'>* Email field is required</div> */}
          <input
        className='TextInput'
        type='password'
        name='password'
        required
        placeholder='Enter your password'
        onChange={onChange}
        />
         {/* <div className='error'>* Password field is required</div> */}
          <input
        className='TextInput'
        type='password'
        name='passwordAgain'
        required
        placeholder='confirm your password'
        onChange={onChange}
        />
         {/* <div className='error'>* Password field is required</div> */}
        <label className='CheckboxLabel'>
          <input
          className='CheckboxInput'
          type='checkbox'
          name='terms'
          />
          Accept the terms and condition
        </label>
        {/* <button className={!validateState(state) ? null : 'Disabled'}
        onClick={handleClick}
        >Login</button> */}
         <button  onClick={handleClick}>Register</button>
         {/* <Navigate to="/home">Login</Navigate> */}
      </form>

     </div>
    </div>
  );
}

export default App;
