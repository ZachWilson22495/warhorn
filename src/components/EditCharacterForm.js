import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditCharacterForm (props) {
  const { character } = props;

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    props.onEditCharacter({name: event.target.name.value, health: event.target.health.value, bonus: event.target.bonus.value, advantage: event.target.advantage.value, roll: event.target.roll.value, id: character.id});
  }

  return (
    <React.Fragment>
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