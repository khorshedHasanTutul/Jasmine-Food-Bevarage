import React from 'react'
import Slider from '../../utilities/slider/Slider';
import appData from '../DataSource/appData'
import CategoryWiseProSingleItem from './CategoryWiseProSingleItem';

const CategoryWiseProductBody = ({categoryParam}) => {
    const options={
        padding: 10,
        type: 'loop',
        speed: 1000,
        perPage:5,
        width:'100%',
        breakpoints: {
          375: {
              perPage: 1,
          },
          576: {
              perPage: 2,
          },
          991: {
              perPage: 3,
          },
          992: {
              perPage: 4,
          },
          1024: {
              perPage: 4,
          },
          1200: {
              perPage: 5,
          }
    },
        autoScroll: {
        speed: 1,
      },
    }
    const getCategoryItems=appData.BottomHeader[1].dropDownCategoryItem.find(item=>item.categoryId===categoryParam);
  return (
    <section class="product-main-area spices-categories-area">
    <div class="container">
        {
            getCategoryItems.subCategory.map(item=>{
                const getSubCatWiseItem=appData.categoryProducts.filter(item2=>item2.subCategory_id===item.subCategoryId)
                if(getSubCatWiseItem.length>0)
                return(
                    <div class="repeat-item">
                    <div class="common-heading">
                        <h1>{item.subCategoryName}</h1>
                    </div>
                    <div class="splide-slider-parent mt-20">
                        <div class="product-main-flex splide__track">
                            <Slider options={options} Template={CategoryWiseProSingleItem} data={getSubCatWiseItem} />
                        </div>
                    </div>
                 </div>
                )
               
            })
        }
        
    </div>
</section>   
  )
}

export default CategoryWiseProductBody