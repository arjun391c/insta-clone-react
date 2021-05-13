import styled from 'styled-components'
import { BiLockAlt, BiMenu } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const TopBar = () => {
    return (
        <Wrapper>
            <div className="accounts">
                <span>
                    <BiLockAlt size={26}/> 
                    <p>arjun__c</p> 
                    <IoIosArrowDown style={{marginTop: 5}}/>
                </span>
            </div>
            <div className="actions">
                <FiPlusSquare size={26}/>
                <BiMenu size={30} style={{marginLeft: 10}}/>
            </div>
        </Wrapper>
    )
}

export default TopBar

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 7vh;
    background-color: #000;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    /* color: #fff; */
    .accounts {
        span {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        p {
            margin: 0 .2rem;
        }
    }
    .actions {
        /* background-color: red; */
        display:flex;
        align-items: center;
    }
`