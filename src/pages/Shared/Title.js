import React from 'react';

const Title = ({title, subTitle, float, color}) => {
    return (
        <div className={` ${float}`}>
            <h4 className='text-secondary text-lg md:text-xl font-semibold'>{subTitle}</h4>
            <h2 className={`text-2xl md:text-4xl font-bold ${color}`}>{title}</h2>
        </div>
    );
};

export default Title;