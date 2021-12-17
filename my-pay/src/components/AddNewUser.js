import Card from "./UI/Card";
import "./AddNewUser.scss";
import PropTypes from "prop-types";
const AddNewUser = (props) => {
  return (
    <Card className="users">
      <ul >
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
AddNewUser.propTypes = {
  users: PropTypes.string,
};
AddNewUser.propTypes = {
  key: PropTypes.string,
};

export default AddNewUser;
