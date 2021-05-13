import styled from 'styled-components'
//components
import TopBar from '../components/HomePage/TopBar'
import StoriesContainer from '../components/HomePage/StoriesContainer'
import PostsContainer from '../components/HomePage/PostsContainer'

const HomePage = () => {
    return (
        <Wrapper>
            <TopBar/>
            <StoriesContainer/>
            <PostsContainer/>
        </Wrapper>
    )
}

export default HomePage

const Wrapper = styled.div`
    overflow-y: hidden;
`