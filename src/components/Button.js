import react from 'react';

export default function Button ({label, link}) {
    return (
        <button className='bg-lilac text-textDark py-2 px-4 rounded-lg hover:bg-opacity-70 transition ' >
            {label}

        </button>
    )
}