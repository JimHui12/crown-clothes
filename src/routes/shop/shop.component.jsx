import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import {setCategories } from '../../store/categories/categories.action'
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
       const categoriesArray = await getCategoriesAndDocuments('categories')
       dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
  }, [])
 
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
