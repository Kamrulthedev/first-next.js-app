import Footer1 from '@/app/components/Shaerd/Footer1';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div className='h-screen'>
                {children}
            </div>
            <Footer1></Footer1>
        </div>
    );
};

export default layout;