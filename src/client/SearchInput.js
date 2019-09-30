import React from 'react'

export default function SearchInput(props) {
    return (
        /*jsx - mix of javascript and HTML */

    <form onSubmit={props.onSearch}>
        <input
            onChange={props.onChange}
            value={props.searchTerm}
            type='text'
        />
        <button type='submit'>Search</button>
    </form>
    )
}