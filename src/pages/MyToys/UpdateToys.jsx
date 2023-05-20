import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToys = () => {

   const toys = useLoaderData();
   console.log(toys);

   return (
      <div>
         <h2>Update toys here</h2>
      </div>
   );
};

export default UpdateToys;