import Button from "./Button/Button";
import "./ErrorModel.scss";
import Card from "./UI/Card";
import PropTypes from "prop-types";

const ErrorModel = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions ">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
ErrorModel.propTypes = {
  onConfirm: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.string,
};

export default ErrorModel;
