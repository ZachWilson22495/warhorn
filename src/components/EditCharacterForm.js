import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditCharacterForm (props) {
  const { character } = props;

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    props.onEditCharacter({name: event.target.name.value, 
      health: event.target.health.value, 
      bonus: parseInt(event.target.bonus.value), 
      advantage: event.target.advantage.value, 
      roll: (isNaN(event.target.roll.value)) ? parseInt(event.target.roll.value) : 0, 
      id: character.id});
  }

  return (
    <React.Fragment>
      <hr></hr>
      <ReusableForm 
        formSubmissionHandler={handleEditCharacterFormSubmission}
        buttonText="Update Character" />
    </React.Fragment>
  );
}

EditCharacterForm.propTypes = {
  character: PropTypes.object,
  onEditCharacter: PropTypes.func
};

export default EditCharacterForm;