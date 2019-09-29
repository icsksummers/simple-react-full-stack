import React from 'react'

export default function SearchInput(props) {
    return (
        /*jsx - mix of javascript and HTML */

    <form>
        {props.searchTerm}
        <input/>
        <button>Search</button>
    </form>
    )
}