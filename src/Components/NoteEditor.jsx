import React, { Fragment, useState } from 'react';
import ColorList from './ColorList';
import Configurations from '../Configurations';
import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';

const NoteEditor = ({ addAction }) => {

    const [text, evaluateTextChange] = useState('');
    const [color, evaluateColorChange] = useState(Configurations.color[0]);

    return <Fragment>
        <ColorList onChange={(e)=> evaluateColorChange(e.target.value)} currentSeleected={color} />
        <textarea onChange={(e)=>evaluateTextChange(e.target.value)}>{text}</textarea>
        <button className={`${css(styles.doneButton)}`} onClick={() => addAction(text, color)} >Done</button>
    </Fragment>
}

const styles = StyleSheet.create({
    doneButton: {
        float: 'right',
        padding: '1rem 2rem',
        background: '#ddd',
        fontSize: '1rem',
        textAlign: 'center',
        marginRight: 25
    }
});

export default NoteEditor;