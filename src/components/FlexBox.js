import react from 'react';
import Button from './Button';

export default function FlexBox ({title, description, image, reverse}) {
    return(
        <div className='flex bg-test'>
            <div>
                <h2 className='text-lilac text-2xl font-semibold mb-2'>{title}</h2>
                <p className='text-textDark mb-4'>{description}</p>
                <Button label="Discover Now" />
            </div>
           
            <div>
                <img src={image} alt={title} className='w-full h-auto'/>
            </div>
        </div>

    )
}