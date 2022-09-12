import React from 'react'
import wedding_photo from '../assets/wedding.jpg';
import GettingMarried from '../components/GettingMarried';
import MoveSectionDown from '../components/MoveSectionDown';
import MoveSectionUp from '../components/MoveSectionUp';
import PageNumber from '../components/PageNumber';

const InfoPage = (props) => {
    return (
        <div className="info wrapper">
            <MoveSectionUp />
            <GettingMarried />
            <div className="text-center">
                <h4 className="color-brown">邀请人</h4>                
                <p className="color-pink">新郎： 胡仲珩 & 新娘： 智颖黎</p>
                <h4 className="mb-3">邀请函</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sequi praesentium asperiores id consequatur odit velit iure! Vel, magnam. Doloremque earum soluta maiores repellat, excepturi velit cupiditate tenetur officia quae.</p>
            </div>
            <div className="photo-frame px-3">
                <img src={wedding_photo} alt="wedding" />
            </div>
            <MoveSectionDown />
            <PageNumber number={props.number} />
      </div>
    )
}

export default InfoPage