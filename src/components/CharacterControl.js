import React from 'react';
import CharacterForm from './CharacterForm'
import CharacterDisplay from './CharacterDisplay'
import CharacterDetail from './CharacterDetail';
import EditCharacterForm from './EditCharacterForm'


const initialCharacters = [
  

]

class CharacterControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableCharacters: [...initialCharacters],
      selectedCharacter: null,
      editing: false
    };
  }

  // roll = (id) => {
  //   const finalRoll;
  //   if (character.roll != undefined) {
  //     finalRoll = character.roll
  //   }
  //   let rollA = Math.random (between 1 and 20)
  //   let rollB = Math.random (between 1 and 20)
  //   if (character.advantage = "Default") {
  //     finalRoll = rollA
  //   } else if (character.advantage = "Advantage") {
  //     if (rollA > rollB) {
  //       finalRoll = rollA
  //     } else {
  //       finalRoll = rollB
  //     }
  //   } else if (character.advantage = "Disadvantage") {
  //     if (rollA < rollB) {
  //       finalRoll = rollA
  //     } else {
  //       finalRoll = rollB
  //     }
  //   }
  //   character.roll = finalRoll (update State?)
  // }

  handleDeletingCharacter = (id) => {
    const newMainCharacterList = this.state.availableCharacters.filter(character => character.id !== id);
    this.setState({
      availableCharacters: newMainCharacterList,
      selectedCharacter: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingCharacterInList = (characterToEdit) => {
    const editedMainCharacterList = this.state.availableCharacters
      .filter(character => character.id !== this.state.selectedCharacter.id)
      .concat(characterToEdit);
    this.setState({
        availableCharacters: editedMainCharacterList,
        editing: false,
        selectedCharacter: null
      });
  }

  handleChangingSelectedCharacter = (id) => {
    const selectedCharacter = this.state.availableCharacters.filter(character => character.id === id)[0];
    this.setState({selectedCharacter: selectedCharacter});
  }

  handleClick = () => {
    if (this.state.selectedCharacter != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCharacter: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddCharacter = (newCharacter) => {
    const newAvailableCharacters = this.state.availableCharacters.concat(newCharacter);
    this.setState({availableCharacters: newAvailableCharacters, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditCharacterForm character = {this.state.selectedCharacter} 
      onEditCharacter = {this.handleEditingCharacterInList} />
      buttonText = "Return to Character List";
    } 
    else if (this.state.selectedCharacter != null) {
      currentlyVisibleState = <CharacterDetail character = {this.state.selectedCharacter}
      onClickingDelete = {this.handleDeletingCharacter}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Character List";
      
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CharacterForm onNewCharacterCreation={this.handleAddCharacter}  />;
      buttonText = "Return to Character List";

    }
    else {
      currentlyVisibleState = <CharacterDisplay characterList={this.state.availableCharacters} onCharacterSelection={this.handleChangingSelectedCharacter} />;
      buttonText = "Add Character";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default CharacterControl;