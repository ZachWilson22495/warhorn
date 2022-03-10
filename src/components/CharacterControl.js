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

  blowTheHorn = (availableCharacters) => {
    availableCharacters.forEach((character) => {
      console.log(character)
      this.roll(character.id) 
    });
    this.sortTheBois(availableCharacters)
    availableCharacters.reverse()
  }



  // if (a.roll === b.roll)
  //  const rollA = Math.floor(Math.random() * 20) + 1
  //  const rollB = Math.floor(Math.random() * 20) + 1

  sortTheBois = (array) => {
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < ( array.length - i -1 ); j++){
        while (array[j].roll === array[j + 1].roll) {
          array[j].roll = Math.floor(Math.random() * 20) + 1
          array[j + 1].roll = Math.floor(Math.random() * 20 + 1)
        };
        if (array[j].roll > array[j + 1].roll ){
          var temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
  }

  roll = (id) => {
    let rollResult;
    let newAvailableCharacters = [...this.state.availableCharacters];
    let chosenCharacter = newAvailableCharacters.find(char => char.id === id)
    if (chosenCharacter.roll !== 0) {
      rollResult = chosenCharacter.roll
    } else if (chosenCharacter.advantage === "Default") {
      rollResult = this.rollDefault() + chosenCharacter.bonus
    } else if (chosenCharacter.advantage === "Advantage") {
      rollResult = this.rollAdvantage() + chosenCharacter.bonus
    } else if (chosenCharacter.advantage === "Disadvantage") {
      rollResult = this.rollDisadvantage() + chosenCharacter.bonus
    }
    chosenCharacter.roll = rollResult
    this.setState({availableCharacter: newAvailableCharacters})
  }
  
  rollDefault = () => {
    const rollResult = Math.floor(Math.random() * 20) + 1;
    return rollResult
  }

  rollAdvantage = () => {
    let rollResult;
    let rollA = Math.floor(Math.random() * 20) + 1;
    let rollB = Math.floor(Math.random() * 20) + 1;
    console.log(rollA)
    console.log(rollB)
    if (rollA > rollB) {
      rollResult = rollA
    } else {
      rollResult = rollB
    }
    console.log(rollResult)
    return rollResult
  }

  rollDisadvantage = () => {
    let rollResult;
    let rollA = Math.floor(Math.random() * 20) +1;
    let rollB = Math.floor(Math.random() * 20) +1;
    console.log(rollA)
    console.log(rollB)
    if (rollA < rollB) {
      rollResult = rollA
    } else {
      rollResult = rollB
    }
    console.log(rollResult)
    return rollResult
  }


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
    this.setState({availableCharacters: [...newAvailableCharacters], formVisibleOnPage: false });
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
      onClickingRoll = {this.roll}
      onClickingDelete = {this.handleDeletingCharacter}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Character List";
      
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CharacterForm onNewCharacterCreation={this.handleAddCharacter}  />;
      buttonText = "Return to Character List";

    }
    else {
      currentlyVisibleState = <CharacterDisplay characterList={this.state.availableCharacters} onCharacterSelection={this.handleChangingSelectedCharacter} 
      onClickingBlow = {this.blowTheHorn}/>;
      buttonText = "Add Character"
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