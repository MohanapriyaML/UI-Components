import React from 'react'
import { EcImage } from '../ui-components/image';

const ImageComponenet = () => {
    return (
        <div>
            <h1>Image</h1>
            <EcImage src='/images/painting.png' alt="UI image" height={400} width={500}/>
        </div>
    )
}

export default ImageComponenet;
