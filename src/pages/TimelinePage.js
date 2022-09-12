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
            <div className="timeline-container">
                <Timeline />
            </div>
            <MoveSectionDown />
            <PageNumber number={props.number} />
        </div>
    )
}

export default TimelinePage