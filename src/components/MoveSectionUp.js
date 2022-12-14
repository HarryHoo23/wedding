import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import '../sass/moveSection.scss'

const MoveSectionUp = () => {
    const { handleMoveUp } = useGlobalContext();

    return (
        <div className="fixed-up">
            <button className='move-btn btn menu-arrow-down-box' onClick={handleMoveUp}>
                <svg
                        id="menu-arrow-up"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.917"
                        height="13.438"
                        viewBox="0 0 23.917 13.438"
                    >
                        <g
                            id="Arrow"
                            transform="translate(-708.002 -808.173)"
                        >
                            <path
                                id="Fill_62"
                                data-name="Fill 62"
                                d="M731.92,809.209a1.056,1.056,0,0,0-.3-.733.976.976,0,0,0-1.415,0l-10.25,10.631-10.25-10.631a.976.976,0,0,0-1.415,0,1.065,1.065,0,0,0,0,1.466l10.96,11.365a.97.97,0,0,0,1.41,0l10.96-11.365a1.057,1.057,0,0,0,.3-.733"
                                fill="#fff"
                            />
                        </g>
                    </svg>
            </button>
        </div>
    )
}

export default MoveSectionUp;