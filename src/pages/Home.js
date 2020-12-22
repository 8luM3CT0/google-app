import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import Search from '../components/Search'
import { useStateValue } from '../StateProvider'

function Home() {

    const [{user}] = useStateValue();

    return (
        <div className="home">
            <div className="home__header">
                <div className="header__left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="header__right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Link to='/login'>
                        <Avatar src={user?.photoURL} />
                    </Link>
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="body__inputContainer">
                    {/**Search  */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
