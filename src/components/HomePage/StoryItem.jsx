import styled from 'styled-components'


const StoryItem = () => {
    return (
        <Wrapper>
            <div className="circle">
                <div className="content">
                    <p>A</p>
                </div>
            </div>
            <p className="username">arjun__</p>
        </Wrapper>
    )
}

export default StoryItem

const Wrapper = styled.div`
    padding-right: 1rem;
    text-align: center;
    .circle {
        background-color: #444;
        height: 8vh;
        width: 8vh;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 90%;
            width: 90%;
            margin: 5%;
            padding: .3rem;
            border-radius: 50%;
            background-color: #333;
        }
    }
    .username {
        font-size: .8rem;
        margin-top: .5rem;
    }
`