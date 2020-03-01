import React from 'react';
import { NoteList, FilterNote } from "./Components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNote, deleteNote, setFilterKey } from './Components/actions';
import { css, StyleSheet } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import './App.css';

const APP = (props) => {
  const { filterKey, notes } = props;
  const { deleteNote, setFilterKey } = props;
  return (
    <div className={`${css(styles.app)}`}>
      <Link className={`${css(styles.link)}`} to="/create">Add a note</Link>
      <div className={`${css(styles.notesLayout)}`}>
        <div className={`${css(styles.notesLayoutContainer)}`}>
          <FilterNote filterKey={filterKey} dispatchSetFilterKey={setFilterKey} />
          <NoteList filterKey={filterKey} notes={notes} dispatchDeleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state = {}) => {
  console.log(state);
  return {
    isBeingAdded: state.configuration ? state.configuration.isBeingAdded : false,
    filterKey: state.configuration.filterKey,
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => ({
  addNote: bindActionCreators(addNote, dispatch),
  deleteNote: bindActionCreators(deleteNote, dispatch),
  setFilterKey: bindActionCreators(setFilterKey, dispatch)
});

APP.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(APP);

const styles = StyleSheet.create({
  app: {
    height: '100%'
  },
  notesLayout: {
    display: 'table',
    borderCollapse: 'separate',
    borderSpacing: 0,
    width: '100%',
    height: '90%',
    margin: 10,
  },
  notesLayoutContainer: {
    display: 'table-row',
    height: '100%'
  },
  link:{
    display:'block',
    height:50,
    width:'100%',
    backgroundColor:'chartreuse'
  }
});