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
      
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <CharacterForm onNewCharacterCreation={this.handleAddCharacter}  />;
      buttonText = "Return to Character List";

    }
    else {
      currentlyVisibleState = <CharacterDisplay characterList={this.state.availableCharacters} onCharacterSelection={this.handleChangingSelectedCharacter} />;
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
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