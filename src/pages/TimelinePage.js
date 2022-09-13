import React from 'react'
import MoveSection from '../components/MoveSectionUp'
import MoveSectionDown from '../components/MoveSectionDown'
import PageNumber from '../components/PageNumber'
import GettingMarried from '../components/GettingMarried'
import Timeline from '../components/Timeline'

const TimelinePage = (props) => {
    return (
        <div className="timeline wrapper">
            <MoveSection />
            <GettingMarried />
            <h3 className='text-center color-brown'>婚礼流程</h3>
            <div className="timeline-container">
                <Timeline />
            </div>
            <MoveSectionDown />
            <PageNumber number={props.number} />
        </div>
    )
}

export default TimelinePage