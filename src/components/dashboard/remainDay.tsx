import React from 'react';

const RemainDay = () => {
    const today = new Date();
    const end = new Date("2024-04-29T15:00:00.000Z");
    const diff = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return (
        <>
            <h2>remain</h2>
            <div>
                <p>残り
                
                    {diffDays}日</p>
            </div>
        </>
    );
};

export default RemainDay;