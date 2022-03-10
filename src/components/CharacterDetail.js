import React from "react";
import PropTypes from "prop-types";

function CharacterDetail(props){
  const { character, onClickingDelete, onClickingRoll } = props; //new code

  return (
    <React.Fragment>
      <h3><div class="setup">Name:</div> <div class="punchline"> {character.name} </div>
      <hr></hr>
      <div class="setup">Health:</div> <div class="punchline"> {character.health} </div>
      <hr></hr>
      <div class="setup">Bonus to Initiative:</div> <div class="punchline"> {character.bonus} </div>
      <hr></hr>
      <div class="setup">Advantage/Disadvantage?</div> <div class="punchline"> {character.advantage} </div>
      <hr></hr>
      <div class="setup">Initiative Roll:</div> <div class="punchline"> {character.roll} </div> </h3> 
      <hr></hr>
      <button onClick={()=> onClickingRoll(character.id) }>Roll for Initiative!</button>
      <hr></hr>
      <button onClick={ props.onClickingEdit }>Update Character</button>
      <button onClick={()=> onClickingDelete(character.id) }>Remove Character</button>
      <hr/>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object,
  onClickingRoll: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default CharacterDetail;