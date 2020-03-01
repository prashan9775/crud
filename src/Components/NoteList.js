import React from 'react';
import { Note } from './Note';
import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';


const NoteList = ({ filterKey, notes, dispatchDeleteNote }) => {
    return <div className={`${css(styles.notesMain)}`}>
        <span className={`${css(styles.notesText)}`}> Show list</span>
        {
            notes.map(n => {
                if (filterKey !== 'none' && filterKey !== n.color) {
                    return null;
                }
                return <div className={`${css(styles.notesInnerDivItem)}`}>
                    <Note className={`${css(styles.notesItem)}`}
                        text={n.text}
                        color={n.color}
                        timestamp={n.timeStamp}
                        deleteCB={()=>dispatchDeleteNote(n.timeStamp)} />
                </div>
            })
        }
    </div>
}

const styles = StyleSheet.create({
    notesMain: {
        display: 'table-cell',
        backgroundColor: '#fff',
        height: '100%',
        width: 780,
        verticalAlign: 'top',
        top: 20,
        position: 'relative',
        left: 10
    },
    notesItem: {
        border: '2px solid black',
        margin: 2,
        paddingLeft: 15
    },
    notesInnerDivItem: {
        marginRight: 25
    },
    notesItemText: {
        textDecoration: 'none',
        display: 'block',
        color: '#446084',
        fontSize: 32,
        fontWeight: 'bolder',
    },
    notesText: {
        textDecoration: 'none',
        display: 'block',
        color: '#446084',
        fontSize: 32,
        fontWeight: 'bolder',
    },
    notesButton: {
        float: 'right',
        marginTop: -35,
        padding: '1rem 2rem',
        background: '#ddd',
        fontSize: '1rem',
        textAlign: 'center'
    }
});

export default NoteList;