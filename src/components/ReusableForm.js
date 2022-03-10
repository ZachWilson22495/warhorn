import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder=' Name' />
        <input
          type='number'
          name='health'
          placeholder=' Health' />
        <input
          type='number'
          name='bonus'
          placeholder=' Bonus to Initiative' />
        <select
          type='text'
          name='advantage'
          placeholder='Advantage/Disadvantage?'>
          <option value="Default">Default</option>
          <option value="Advantage">Advantage</option>
          <option value="Disadvantage">Disadvantage</option>
        </select>
        <input
          type='number'
          name='roll'
          placeholder='Roll'/>

          
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