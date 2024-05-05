import { useState } from "react";
import "./SigninForm.style.css";

const SigninForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      name: "",
    });
  };
  return (
    <div className="signInForm">
      <h2 className="welcomeText">
        Hello! <br /> Firstly you need to register!
      </h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} maxlength="20" />
        <button type="submit">Submit</button>
      </form>
      <p className="regInfo">If you will reload page everyting will be lost!</p>
    </div>
  );
};

export default SigninForm;
