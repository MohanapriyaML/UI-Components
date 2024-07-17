import React from 'react'
import UiImage from '../ui-components/image/UiImage';

const ImageComponenet = () => {
    return (
        <div>
            <h1>Image</h1>
            <UiImage src='/images/painting.png' alt="UI image" height={400} width={500}/>
        </div>
    )
}

export default ImageComponenet;
