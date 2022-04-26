import React from 'react'

export default function Icon({ name }) {
    return (
        <>
            <div className='d-flex justify-content-center flex-md-column align-items-md-center mt-4'>
                <div className='bg-white icon-container'><i className={`fa-brands fa-${name}`}></i></div>
                <p className='text-white d-none d-lg-block text-uppercase'>{name}</p>
            </div>
        </>
    )
}
