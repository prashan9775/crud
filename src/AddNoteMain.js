import React from 'react';
import { AddNote} from "./Components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNote } from './Components/actions';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import './App.css';

const AddNoteMain = withRouter((props) => {
  const { addNote,history} = props;
  return (
      <AddNote dispatchAddNote={addNote} history={history}/>
  );
})

const mapDispatchToProps = (dispatch) => ({
  addNote: bindActionCreators(addNote, dispatch),
});

AddNoteMain.contextTypes = {
    router           : PropTypes.object.isRequired, 
}

export default connect(()=>{}, mapDispatchToProps)(AddNoteMain);
