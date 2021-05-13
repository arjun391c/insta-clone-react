import styled from 'styled-components'
import {NavLink} from 'react-router-dom' 
import { IoSearch, IoHome, IoHeartOutline} from 'react-icons/io5';
import { MdSlowMotionVideo } from 'react-icons/md';
import { HiUserCircle } from 'react-icons/hi';

const NavBar = () => {
    return (
        <Wrapper>
            <nav>
                <NavLink to="/">
                    <IoHome />
                </NavLink>
                <NavLink to="/search">
                    <IoSearch />
                </NavLink>
                <NavLink to="/reels">
                    <MdSlowMotionVideo />
                </NavLink>
                <NavLink to="/activity">
                    <IoHeartOutline />
                    {/* IoHeartSharp */}
                </NavLink>
                <NavLink to="/profile">
                    <HiUserCircle />
                </NavLink>
            </nav>
        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
    height: 7vh;
    background-color: #000;
    position: fixed;
    bottom: 0;
    width: 100vw;
    nav {
        display: flex;
        height: 100%;
    }
    a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: .2rem;
        /* color: #fff; */
        font-size: 1.5rem;
    }
`