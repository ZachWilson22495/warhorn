import React from "react";
import Character from "./Character";
import PropTypes from "prop-types";

function CharacterDisplay(props){
  const {onClickingBlow} = props;
  const reversedList = props.characterList.reverse();
  return (
    <body>
    <React.Fragment>
    <hr></hr>
      {console.log(props.characterList)}
      
      {reversedList.map((character) =>
      
      <div class="character">
        <Character whenCharacterClicked = { props.onCharacterSelection} 
        name={character.name}
        roll= {character.roll}
        id={character.id}
        key={character.id}/>
      </div>
      )}
    <hr></hr>

      <button onClick={()=> onClickingBlow(props.characterList) }>Sound the Warhorn!</button>
      {console.log(props.characterList)}
    </React.Fragment>
    </body>
  );
}

CharacterDisplay.propTypes = {
  characterList: PropTypes.array,
  onCharacterSelection: PropTypes.func,
  onClickingBlow: PropTypes.func,
};

export default CharacterDisplay;