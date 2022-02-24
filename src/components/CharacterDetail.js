import React from "react";
import PropTypes from "prop-types";

function CharacterDetail(props){
  const { character, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h3>Name: {character.name}
      <hr></hr>
      Health: {character.health}
      <hr></hr>
      Bonus to Initiative: {character.bonus}
      <hr></hr>
      Advantage/Disadvantage? {character.advantage}
      <hr></hr>
      Initiative Roll: {character.roll}</h3>
      <hr></hr>
      <button onClick={ props.onClickingEdit }>Update Character</button>
      <button onClick={()=> onClickingDelete(character.id) }>Remove Character</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object,
  onClickingDelete: PropTypes.func, // new code
  onClickingEdit: PropTypes.func
};
export default CharacterDetail;