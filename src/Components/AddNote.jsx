import React, { Fragment } from 'react';
import NoteEditor from './NoteEditor';
import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';

const addNote = (text, color,dispatchAddNote,history) => {
    dispatchAddNote(text, color, Date.now());
    history.push('/');
}

const AddNote = ({ dispatchAddNote,history}) => {
    return <Fragment>
        <header className={`${css(styles.App)}`}>
            <div className={`${css(styles.headerWrapper)}`}>
                <div className={`${css(styles.flexRow)} ${css(styles.container)}`}>
                    <div className={`${css(styles.addNoteText)}`}>
                        <span>Add a note</span>
                    </div>
                    <NoteEditor addAction={(text,color) => addNote(text,color,dispatchAddNote,history)} />
                </div>
            </div>
        </header>
    </Fragment>
}

const styles = StyleSheet.create({
    App: {
        width: '100%',
        zIndex: 30,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
        transition: 'background-color .3s, opacity .3s'
    },
    headerWrapper: {
        boxShadow: '1px 1px 10px rgba(0,0,0,0.15)',
        height: 80
    },
    flexRow: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    container: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    addNoteText: {
        textDecoration: 'none',
        display: 'block',
        color: '#446084',
        fontSize: 32,
        fontWeight: 'bolder',
        margin: 15
    },
    layoutContainer: {
        display: 'table-row',
        height: '100%',
    }
});

export default AddNote;