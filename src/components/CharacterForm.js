import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function CharacterForm(props) {
  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    props.onNewCharacterCreation({name: event.target.name.value, 
      health: event.target.health.value, 
      bonus: parseInt(event.target.bonus.value) || 0, 
      advantage: event.target.advantage.value, 
      roll: (isNaN(parseInt(event.target.roll.value))) ? 0 : parseInt(event.target.roll.value),
      id: v4()})
  }

  return (
    <React.Fragment>
      <body>
      <hr></hr>
      <ReusableForm
      formSubmissionHandler={handleNewCharacterFormSubmission}
      buttonText="Add Character" />
      </body>
    </React.Fragment>
  );
}

CharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func,
  onClickingBlow: PropTypes.func
};

export default CharacterForm;