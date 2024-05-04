import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SigninForm;
