import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();

    const search= e =>{
        e.preventDefault();

        console.log('pressed yep');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }

    require('react-dom');
    window.React2 = require('react');
    console.log(window.React1 === window.React2);

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {!hideButtons ? (
            <div className="search__btns">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ): (
            <div className="search__btns">
                <Button className="search__btnsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search__btnsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            )}
        </form>
    )
}

export default Search
