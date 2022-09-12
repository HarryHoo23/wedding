import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcCamcorderPro } from 'react-icons/fc';
import { BiDrink } from 'react-icons/bi'
import { GiSpookyHouse, GiBigDiamondRing, GiKnifeFork } from 'react-icons/gi'


// --brown-color: #946c52;
//     --lighter-brown-color: #9f7866;
//     --pink-color: #BFACE0;
//     --dark-grey-color: #b3b3b3;
//     --grey-color: #d0c8bb;
//     --orange-color: #d0a781;
//     --champagne-color: #ddcab4;
//     --font-color: #2d2d2d;

const verticalTimeline = () => {
    return (
        <VerticalTimeline animate={true} layout={'1-column-left'}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#645CAA', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #645CAA' }}
                date="11.06 - 9:00"
                iconStyle={{ background: '#645CAA', color: '#fff' }}
                icon={<GiSpookyHouse color='#fff' />}
            >                              
                <h5>
                    接亲
                </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#A084CA', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #A084CA' }}
                date="11.06 - 11:00"
                iconStyle={{ background: '#A084CA', color: '#fff' }}
                icon={<BiDrink />}
            >                              
                <h5>
                    入场
                </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#BFACE0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #BFACE0' }}
                date="11.06 - 11:30"
                iconStyle={{ background: '#BFACE0', color: '#fff' }}
                icon={<GiBigDiamondRing />}
            >
                <h5>
                    仪式开始
                </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#EBC7E8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #EBC7E8' }}
                date="11.06 - 12:45"
                iconStyle={{ background: '#EBC7E8', color: '#fff' }}
                icon={<GiKnifeFork color='#f0f0f0' />}
            >
                <h5>
                    婚宴用餐
                </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#9FC9F3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #9FC9F3' }}
                date="11.06 - 14:00 - 16:30"
                iconStyle={{ background: '#9FC9F3', color: '#fff' }}
                icon={<FcCamcorderPro />}
            >
                <h5>
                    合影，娱乐活动
                </h5>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    )
}

const Timeline = () => {
    return (
        <>
            {verticalTimeline()}
        </>
    )
}

export default Timeline