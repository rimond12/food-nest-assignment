import React from 'react';
import { useLoaderData } from 'react-router';

const MyFoodRequest = () => {
    const reqFoods = useLoaderData();
    console.log(reqFoods);
    
    return (
        <div>
            
        </div>
    );
};

export default MyFoodRequest;