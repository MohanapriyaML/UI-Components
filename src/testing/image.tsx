import React from 'react'
import UiImage from '../ui-components/image/UiImage';

const ImageComponenet = () => {
    return (
        <div>
            <h1>Image</h1>
            <UiImage src='/images/About.png' alt="UI image" height='200px' width='300px'/>
        </div>
    )
}

export default ImageComponenet;
