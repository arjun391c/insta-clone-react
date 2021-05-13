import styled from 'styled-components'
import {MdMoreVert} from 'react-icons/md'
import {IoHeartOutline, IoChatbubbleOutline, IoSendOutline} from 'react-icons/io5'
import {RiFlag2Line} from 'react-icons/ri'

const PostItem = () => {
    return (
        <Wrapper>
            <div className="header">
                <div className="left-section">
                    <div className="author-photo">
                        <p>A</p>
                    </div>
                    <p className="username">arjun__</p>
                </div>
                <MdMoreVert size={26} style={{marginRight: 6}}/>
            </div>
            <div className="image">

            </div>
            <div className="actions">
                <div className="action-buttons">
                    <div className="left-section">
                        <IoHeartOutline size={28} style={{marginRight: 10}}/>
                        <IoChatbubbleOutline size={26} style={{marginRight: 10}}/>
                        <IoSendOutline size={25}/>
                    </div>
                    <RiFlag2Line size={28}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default PostItem

const Wrapper = styled.div`
    margin: .5rem 0;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .3rem 0;
        .left-section {
            display: flex;
            align-items: center;
            padding: 0rem 1rem;
            .author-photo {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                background-color: #333;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .username {
                margin-left: .4rem;
                font-size: .8rem;
            }
        }
    }
    .image {
        background-color: #555;
        height: 40vh;
    }
    .actions {
        padding: .4rem 1rem;
        .action-buttons {
            display: flex;
            justify-content: space-between;
        }
    }
`