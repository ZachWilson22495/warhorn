import React from "react";
import Character from "./Character";
import PropTypes from "prop-types";
import warhornLeft from "./WarhornLeft.jpg";
import warhornRight from "./WarhornRight.jpg";

function CharacterDisplay(props){
  const {onClickingBlow} = props;
  const reversedList = props.characterList.reverse();

  return (
    <body>
    <React.Fragment>
    <hr></hr>
    <div class="warhornLeft"><img src={warhornLeft} alt="WarhornLeft" width="100%" height="100%"></img></div>
          <div class="warhornRight"><img src={warhornRight} alt="WarhornRight" width="100%" height="100%"></img></div>
    
      {console.log(props.characterList)}

      <div class="button"> <button onClick={()=> onClickingBlow(props.characterList) }>Sound the Warhorn!</button>
      {console.log(props.characterList)}
      </div>
      
      {reversedList.map((character) =>
      
      <div class="character">
        <Character whenCharacterClicked = { props.onCharacterSelection} 
        name={character.name}
        roll= {character.roll}
        id={character.id}
        key={character.id}/>
        </div>
      )}
      


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