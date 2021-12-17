import AddNewUser from "./components/AddNewUser";
import NewUserForm from "./components/NewUserForm";
import React, {useState} from "react";

const App = (props) => {
  const [newUser, setNewUser] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setNewUser((prevAddNewUser) => {
      return [
        ...prevAddNewUser,
        {name: uName, age: uAge, id: Math.random.toString()},
      ];
    });
  };
  return (
    <div>
      <NewUserForm onAddUser={addUserHandler} />
      <AddNewUser users={newUser} />
    </div>
  );
};

export default App;
