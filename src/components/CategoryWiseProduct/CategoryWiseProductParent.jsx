import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryWiseProductBody from './CategoryWiseProductBody';
import CategoryWiseProductHeader from './CategoryWiseProductHeader';

const CategoryWiseProductParent = () => {
  const {id}=useParams();
  return (
    <>
    <CategoryWiseProductHeader categoryParam={parseInt(id)}/>
    <CategoryWiseProductBody categoryParam={parseInt(id)}/>
    </>
  );
};

export default CategoryWiseProductParent;
