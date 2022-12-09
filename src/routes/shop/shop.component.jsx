import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import {fetchCategoriesStart } from '../../store/categories/categories.action'
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
       dispatch(fetchCategoriesStart())
  }, [])
 
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
