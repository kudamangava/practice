import React, {useState} from "react";
import Card from "./UI/Card";
import "./NewUserForm.scss";
import Button from "./Button/Button";
import ErrorModal from "./ErrorModel";
import PropTypes from "prop-types";

const NewUserForm = (props) => {
  const [enteredUsername, setUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <div>
            <Button type="submit">Add Users</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
NewUserForm.propTypes = {
  onAddUser: PropTypes.string,
  title: PropTypes.string,
};

export default NewUserForm;
