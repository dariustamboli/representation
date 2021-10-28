import "./RepCard.css";

function RepCard(props) {
  return (
    <div className={`rep-card ${props.party}`}>
      <img
        className="rep-image"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Placeholder"
      ></img>
      <div>
        <p>Name: </p>
        <p>Position: </p>
        <p>Website:</p>
        <p>Phone Number:</p>
        <p>Email:</p>
      </div>
    </div>
  );
}

export default RepCard;
