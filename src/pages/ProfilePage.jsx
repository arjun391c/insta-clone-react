import styled from 'styled-components'
//components
import TopBar from '../components/ProfilePage/TopBar'

const ProfilePage = () => {
    return (
        <Wrapper>
            <TopBar/>
            <div className="content">
            </div>
        </Wrapper>
    )
}

export default ProfilePage

const Wrapper = styled.div`
    .content {
        margin-top: 7vh;
    }
`