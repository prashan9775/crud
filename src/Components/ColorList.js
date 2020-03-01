import React from 'react';
import Configurations from '../Configurations';
import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';

export default ({
    currentSelected,
    onChange
}) => (<div className={`${css(styles.selectDropdown)}`}>
    <select className={`${css(styles.select)}`}
        onChange={onChange}>
        {Configurations.color.map(c => <option selected={currentSelected === c} value={c}>{c}</option>)}
    </select>
</div>)

const styles = StyleSheet.create({
    selectDropdown: {
        position: 'relative',
        backgroundColor: '#e6e6e6',
        width: 'auto',
        float: 'left',
        maxWidth: ' 100%',
        borderRadius: 2,
    },
    select: {
        fontFamily: "helvetica neue",
        fontSize: '1rem',
        fontWeight: '200',
        maxWidth: '100%',
        height: 40,
        fontSize: 20,
        fontWeight: 400,
        width: 100,
        border: 'none',
        backgroundColor: 'transparent',
    }
});