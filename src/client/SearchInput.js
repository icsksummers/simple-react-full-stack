import React from 'react'

export default function SearchInput(props) {
    return (
        /*jsx - mix of javascript and HTML */

    <form>
        {props.searchTerm}
        <input
            onChange={props.onChange}
            value={props.searchTerm}
            type='text'
        />
        <button>Search</button>
    </form>
    )
}