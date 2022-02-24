import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder=' Character Name' />
        <input
          type='text'
          name='health'
          placeholder='Character Health' />
        <input
          type='number'
          name='bonus'
          placeholder='Character Bonus to Initiative' />
        {/* <input
          type='select'
          name='advantage'
          placeholder='Do they have Advantage/Disadvantage?' /> */}

          {/* <option selected value="normal">Normal</option>
          <option value="advantage">Advantage</option>
          <option value="disadvantage">Disadvantage</option> */}

          
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;