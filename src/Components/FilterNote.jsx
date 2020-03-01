import React from 'react';
import Configurations from '../Configurations';

import {
    css,
    StyleSheet,
} from 'aphrodite/no-important';

const FilterNotes = ({ filterKey, dispatchSetFilterKey }) => {
    const filterClicked = (e, filterKey, dispatchSetFilterKey) => {
        if (e.target.type === 'checkbox' && e.target.value !== filterKey) {
            dispatchSetFilterKey(e.target.value)
        }
    }
    return (
        <div className={`${css(styles.sidenav)}`} onClick={(e) => filterClicked(e, filterKey, dispatchSetFilterKey)}>
            <span className={`${css(styles.sidenavText)}`}>Select Color Filters</span>
            {
                Configurations.color.map(v =>
                    <span className={`${css(styles.sidenavItems)}`}>
                        <input className={`${css(styles.sidenavItemsFilters)}`}
                            type="checkbox" checked={filterKey === v}
                            name="colorFilter"
                            value={v} />{v}
                    </span>)
            }
            <span className={`${css(styles.sidenavItems)}`}>
                <input className={`${css(styles.sidenavItemsFilters)}`} type="checkbox" name="colorFilter" checked={filterKey === 'none'} value="none" />{"All"}
            </span>
        </div>
    )
}

const styles = StyleSheet.create({
    sidenav: {
        display: 'table-cell',
        background: '#eee',
        width: 300,
        verticalAlign: 'top',
        paddingBottom: 60,
        zIndex: 1,
        top: 20,
        left: 10,
        background: '#eee',
        overflowX: 'hidden',
        padding: '8px 0',
        top: 100,
        height: '80%'
    },
    sidenavItems: {
        display: 'block'
    },
    sidenavItemsFilters: {
        float: 'left',
        marginLeft: 20
    },
    sidenavText: {
        display: 'block',
        margin: 20,
        textDecoration: 'none',
        display: 'block',
        color: '#446084',
        fontSize: 32,
        fontWeight: 'bolder',
    }

});

export default React.memo(FilterNotes);