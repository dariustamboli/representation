import "./Button.css";

function Button(props) {
  return (
    <button class="button" onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

export default Button;
