import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component {
    constructor() {
// Using a class component following the structure below
// super([arguments]); // calls the parent constructor.
// super.functionOnParent([arguments]);

/* class X { 
    constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
} */
      super()
      this.state = {
        // content reflects a message prior to writing note
        content: 'Please write a note...',
        //textEdit set to 0 so that nothing displays
        textEdit: 0,
      }
      // The following are linked to the delete, edit and saveEdits functions
      this.delete = this.delete.bind(this)
      this.edit = this.edit.bind(this)
      this.saveEdits = this.saveEdits.bind(this)
    };
    
    componentDidUpdate() {
      if (this.state.edit) {
        this.refs.newText.select() 
      } 
    };
    
    shouldComponentUpdate(nextProp, nextState) {
      return this.state !== nextState
    };
    
    edit() {
      this.setState({
        textEdit: 1
      });
    };
    
    saveEdits() {
      this.setState({
        content: this.refs.newText.value,
        textEdit: 0
      }); 
    };
    
    delete() {
      this.setState({
        content: ''
      });
    };
    
    noteComplete() {
      return (
        <div className="note">
          <p>{this.state.content}</p>
          <span>
            <button onClick={this.edit}>Add Note</button>
            <button onClick={this.delete}>Delete Note</button>
          </span>
        </div>
      );
    };
    
    textEdit() {
      return (
        <div className="note">
          <textarea ref="newText" cols="82" rows="10"
            defaultValue={this.state.content}>
          </textarea>
          <button onClick={this.saveEdits}>Save Note</button>
        </div>
      )
    }
      
    render() {
      return (
        this.state.textEdit
          ? this.textEdit() 
          : this.noteComplete()
      )
    }
  }
  
  ReactDOM.render(
    <Note />,
    // Grabbing root ID
    document.querySelector('#root')
  )
  
  

export default Note;
