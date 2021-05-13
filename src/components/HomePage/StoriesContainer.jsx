import styled from 'styled-components'
//components
import StoryItem from './StoryItem'

const StoriesContainer = () => {
    return (
        <Wrapper>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
            <StoryItem/>
        </Wrapper>
    )
}

export default StoriesContainer

const Wrapper = styled.div`
    /* height: 12vh; */
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 1rem; 
    margin-top: 8vh;
    border-bottom: 1px solid #444;
    /* hide scroll */
    -ms-overflow-style: none;  
    scrollbar-width: none; 
    ::-webkit-scrollbar {
    display: none;
    }
`