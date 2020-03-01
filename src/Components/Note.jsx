import React from 'react';
import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';


export const Note = ({ text, color,timestamp, deleteCB }) => {
    if (typeof deleteCB == 'function' && text) {
        let dateObj = new Date(timestamp);
        let date = `${dateObj.toDateString()} ${dateObj.getDate()}-${dateObj.getMinutes()}-${dateObj.getSeconds()}`
        return <div className={`${css(styles.notesItem)}`} style={{backgroundColor: color }}>
                <div className={`${css(styles.notesItemDiv)}`}>
                <span className={`${css(styles.notesItemText)}`}>{text}</span>
                </div>
            <button className={`${css(styles.notesButton)}`} onClick={deleteCB}>DELETE</button>
            <div className={`${css(styles.notesItemDate)}`}>{`${date}`}</div>
        </div>
    }
    return null;
}

const styles = StyleSheet.create({
    notesItem: {
        border: '2px solid black',
        margin: 2,
        paddingLeft: 15,
        minHeight: 100
    },
    notesItemDiv:{
        display: 'block',
    },
    notesItemText: {
        textDecoration: 'none',
        color: '#446084',
        fontSize: 32,
        fontWeight: 'bolder',
    },
    notesItemDate:{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bolder',
        marginTop:10
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