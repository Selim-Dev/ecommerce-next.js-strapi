'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'
import {ArrowRight} from 'lucide-react'
function ProductSection() {
	const [productList,setProductList]= useState([])
	useEffect(()=>{
		getLatestProducts_();
	},[])
	const getLatestProducts_=()=>{
		ProductApis.getLatestProducts().then(res=>{
			console.log(res.data.data);
			setProductList(res.data.data)
		})
	}
	
	return (
		
		<div className='px-10 md:px-20'>
        <h2 className='font-bold text-[20px] my-3'>Brand New 
        <span className='font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-teal-600'>
          View All Collection <ArrowRight className='h-4' /> </span></h2>			<ProductList productList={productList}/>
			</div>
	)
}

export default ProductSection