"use client"

import React from 'react';

const ErrorPage = ({error, reset}) => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-serif text-red-500 text-center'>Somting Went Wrong !!</h1>
            <h1 className='text-2xl font-serif text-red-500 text-center'>{error.message}</h1>
            <button onClick={()=> reset()} className='font-serif text-xl p-2 rounded-lg bg-slate-300 text-black' >Try Again</button>
        </div>
    );
};

export default ErrorPage;