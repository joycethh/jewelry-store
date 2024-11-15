import react from 'react';
import Button from './Button';

export default function FlexBox ({title, description, image, reverse}) {
    return(
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} p-4 md:p-6`} >
            <div className='w-full md:w-1/2 p-5 text-center flex flex-col items-center' >
                <h2 className='text-lilac text-2xl font-semibold mb-2'>{title}</h2>
                <p className='text-textDark mb-4 mt-2'>{description}</p>
                <Button label="Discover Now" />
            </div>
           
            <div className='w-full md:w-1/2 p-4'>
                <img 
                    src={image} 
                    alt={title} 
                    className='w-full h-48 md:h-70 lg: h-75 object-cover object-center max-w-md mx-auto rounded-lg shadow-md border-2 border-gray-200'/>
            </div>
        </div>

    )
}

