import React from 'react'
import invitation from '../assets/invitation.svg';
import MoveSectionDown from '../components/MoveSectionDown';
import PageNumber from '../components/PageNumber';
import { useSpring, animated } from 'react-spring';

const Homepage = (props) => {

    const animation = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: -200 }, delay: 1500, config: { duration: 1000 } });
    const animation2 = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: -200 }, delay: 2500, config: { duration: 1000 } });
    const animation3 = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: -200 }, delay: 3500, config: { duration: 1000 } });
    const styles = useSpring({ to: { x: 0 }, from: { x: -100 }, delay: 1500, delay: 1000, config: {duration: 1000}});

    return (
        <div className="home wrapper">                    
            <div className="d-flex justify-content-center flex-column h-100">
                <animated.div style={animation}>
                    <img className="invitation" src={invitation} alt="invitation" />
                </animated.div>
                <animated.h1 style={{ ...styles }} className="mt-5">Finally it's our wedding!</animated.h1>  
                <animated.h2 style={animation2}>
                    婚礼邀请函
                </animated.h2>
                <animated.h1 className="font-large" style={animation3}>
                    新郎胡仲珩 & 新娘智颖黎
                </animated.h1>
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