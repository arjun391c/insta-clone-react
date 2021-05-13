import styled from 'styled-components'
import {SiMessenger} from 'react-icons/si'

const TopBar = () => {
    return (
        <Wrapper>
            <h6>Instagram</h6>
            <SiMessenger size={24}/>
        </Wrapper>
    )
}

export default TopBar

const Wrapper = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: #000;
    h6 {
        font-size: 1.5rem;
        font-style: italic;
        font-family:'Bradley Hand';
    }
`