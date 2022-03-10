import React from "react";
import PropTypes from "prop-types";
function Character(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.health}</h3>
        <h3>{props.bonus}</h3>
        <h3>{props.advantage}</h3>
        <h3>{props.roll}</h3>
      </div>
    </React.Fragment>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  health: PropTypes.number,
  bonus: PropTypes.number,
  advantage: PropTypes.string,
  roll: PropTypes.number,
  id: PropTypes.string,
  whenCharacterClicked: PropTypes.func
};
export default Character;