import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Homepage from './pages/Homepage'
import InfoPage from './pages/InfoPage'
import TimelinePage from './pages/TimelinePage'
import ContactPage from './pages/ContactPage'

const App = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            licenseKey={"zMccI0J!a3"}
            normalScrollElements={'.timeline-container, .contact'}
            fitToSection={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Homepage number={0} />
                        </div>

                        <div className="section">
                            <InfoPage number={1} />
                        </div>

                        <div className="section">
                            <TimelinePage number={2} />
                        </div>

                        <div className="section">
                            <ContactPage number={3} />
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default App