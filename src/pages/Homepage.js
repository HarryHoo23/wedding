import React from 'react'
import invitation from '../assets/invitation.svg';
import MoveSectionDown from '../components/MoveSectionDown';
import PageNumber from '../components/PageNumber';

const Homepage = (props) => {    
    return (
        <div className="home wrapper">
            <div className="d-flex justify-content-center flex-column h-100">
                <img className="invitation" src={invitation} alt="invitation" />
                <h1 className="mt-5">Finally it's our wedding!</h1>
                <h2>婚礼邀请函</h2>
                <h1 className="font-large">新郎胡仲珩 & 新娘智颖黎</h1>
                <p>2022.11.06 / 澳大利亚 Jack Rabbit Vineyard</p>
                <p className="color-pink font-large">SAVE OUR DATE</p>
                <p className="font-small">Made by Zhongheng Hu</p>
            </div>
            <MoveSectionDown />
            <PageNumber number={props.number} />
        </div>
    )
}

export default Homepage