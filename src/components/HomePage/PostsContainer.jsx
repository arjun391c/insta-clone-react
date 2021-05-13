import styled from 'styled-components'
import PostItem from './PostItem'

const PostsContainer = () => {
    return (
        <Wrapper>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </Wrapper>
    )
}

export default PostsContainer

const Wrapper = styled.div`
    /* padding: 0 1rem; */
`