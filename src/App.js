import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Homepage from './pages/Homepage'
import InfoPage from './pages/InfoPage'
import TimelinePage from './pages/TimelinePage'
import ContactPage from './pages/ContactPage'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import song from './assets/you-are-the-reason.mp3';
import ReactAudioPlayer from 'react-audio-player'

const App = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);            
        }, 500);
    }, []);

    const onLeave = (index, destination, direction) => {
        console.log(index.index);
        console.log(destination.index)
        if (index.index === 0 && destination.index === 1) {
            setIsVisible(true);
        }
    }

    if (isLoading) {
        return (
            <div className="loading vh-100 w-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
            </div>
        )
    }

    return (
        <>
            <div className={`audio-cd ${isPlaying ? 'rotate' : ''}`} onClick={() => setIsPlaying(!isPlaying)}>
                <ReactAudioPlayer
                    className='react-play'
                    src={song}
                    autoPlay={true}
                    loop={true}
                    volume={0.5}
                />
            </div>
            <ReactFullpage
                scrollingSpeed={1000}
                licenseKey={"zMccI0J!a3"}
                normalScrollElements={'.timeline-container, .contact, .info'}
                fitToSection={true}
                onLeave={onLeave}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>                        
                            <div className="section">
                                <Homepage number={0} />
                            </div>

                            <div className="section">
                                <InfoPage number={1} isVisible={isVisible} />
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
        </>
    )
}

export default App