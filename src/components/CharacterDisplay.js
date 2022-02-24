import React from "react";
import Character from "./Character";
import PropTypes from "prop-types";

function CharacterDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.characterList.map((character) =>
        <Character whenCharacterClicked = { props.onCharacterSelection} 
        name={character.name}
        id={character.id}
        key={character.id}/>
      )}
    </React.Fragment>
  );
}

CharacterDisplay.propTypes = {
  characterList: PropTypes.array,
  onCharacterSelection: PropTypes.func
};

export default CharacterDisplay;