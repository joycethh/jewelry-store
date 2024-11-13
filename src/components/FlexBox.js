import react from 'react';
import Button from './Button';

export default function FlexBox ({title, description, image, reverse}) {
    return(
        <div>
            //text 
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button label="Discover Now" />
            </div>
            //image
            <div>
                <img src={image} alt={title} />
            </div>
        </div>

    )
}