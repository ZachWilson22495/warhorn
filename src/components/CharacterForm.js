import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function CharacterForm(props) {
  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    props.onNewCharacterCreation({name: event.target.name.value, health: event.target.health.value, bonus: event.target.bonus.value, roll: event.target.roll.value, id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewCharacterFormSubmission}
      buttonText="Add Character" />
    </React.Fragment>
  );
}

CharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
};

export default CharacterForm;