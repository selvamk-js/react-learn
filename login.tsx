import * as React from "react";
import "./Login.css";
import { Formik } from "formik";

// const initialState = {
// //   name: "",
//   email: "",
//   password: "",
// //   passwordAgain: "",
// //   terms: false,
// };
// const reducer = (state: any, action: any) => {
//   // if(action.input === 'name'){
//   return { ...state, [action.input]: action.value };
// };

// function Login() {
//   const [state, dispatch] = React.useReducer(reducer, initialState);

//   const validateState = () => {
//     let enable = false;
//     if (
//       state.password !== "" &&
//       state.passwordAgain !== "" &&
//       state.password === state.passwordAgain &&
//       state.password.length > 3 &&
//       state.email &&
//       state.terms
//     ) {
//       enable = true;
//     }
//     console.log(enable);
//     return enable;
//   };

//   // console.log(state);

//   const handleClick = (e: any) => {
//     e.preventDefault();
//     alert(`Hello ${state.name} you have successfully loggedin.....!!`);
//   };

//   const onChange = (e: any) => {
//     const { name, value, checked } = e.target;
//     const action = {
//       input: name,
//       value: name === "terms" ? checked : value,
//     };
//     dispatch(action);
//   };
function Login() {

  return (
    <div className="App">
      <div className="LoginFormContainer">
        <h2 className="LoginFormHeading">Login</h2>
        <Formik 
        initialValues={{
            email: "",
            password: "",
        }}

        validate={(values) =>{
            const errors: any = {};
            if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
  
              if (!values.password) {
                errors.password = "Password is required";
              } else if (
                values.password.length < 6
                // !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6}$/i.test(
                //   values.password
                // )
              ) {
                errors.password = "Password is not strong enough";
              }
              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
    
                }, 400);
              }}
            >

{({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
            isValid,
          }) => {

            
        }}
        <form className="LoginForm">
        <div className="fieldInput">
          <input
            className="textInput"
            type="text"
            name="email"
            required
            placeholder="Enter your Email"
            onChange={onChange}
          />
          </div>
          <div className="fieldInput">
          <input
            className="textInput"
            type="password"
            name="password"
            required
            placeholder="Enter your Password"
            onChange={onChange}
          />
          </div>
          <button
            className={"loginButton"}
            // onClick={handleClick}
            disabled={!validateState()}
          >
            Login
          </button>
          {/* <Navigate to="/home">Login</Navigate> */}
        </form>
      </div>
    </div>
  );
}

export default Login;