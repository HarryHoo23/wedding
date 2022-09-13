import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import img1 from "../assets/img/wedding1.jpg";
import img2 from "../assets/img/wedding2.jpg";
import img3 from "../assets/img/wedding3.jpg";
import img4 from "../assets/img/wedding4.jpg";
import img5 from "../assets/img/wedding5.jpg";
import img6 from "../assets/img/wedding6.jpg";
import img7 from "../assets/img/wedding7.jpg";
import img8 from "../assets/img/wedding8.jpg";

const ImageGallery = () => {

    const imageList = [
        {
            original: img1,
        },
        {
            original: img2
        },
        {
            original: img3,
        },
        {
            original: img4
        },
        {
            original: img5
        },
        {
            original: img6
        },
        {
            original: img7
        },
        {
            original: img8
        }
    ];

    return (
        <ReactImageGallery items={imageList} showFullscreenButton={false} autoPlay={true} />
    )
}

export default ImageGallery