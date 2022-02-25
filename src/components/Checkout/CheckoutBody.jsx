import React, { useContext, useEffect, useRef, useState } from 'react'
import AddressContextProvider from '../Store/AddressContextProvider'
import cartContext from '../Store/cart-context'
import Address from './Address'
import Payment from './Payment'
import ProductSummary from './ProductSummary'

const CheckoutBody = () => {
    const ctxCart=useContext(cartContext)
    const ProSummaryRef=useRef(null)
    const [isActiveProductSummary,setActiveProductSummary]=useState(true)
    const [isActiveAddress,setActiveAddress]=useState(false)
    const [isActivePayment,setActivePayment]=useState(false)

    const SummaryActiveHandler=()=>{
        setActiveProductSummary(true)
        setActiveAddress(false)
        setActivePayment(false)
    }

    const AddressActiveHandler=()=>{
        setActiveProductSummary(false)
        setActiveAddress(true)
        setActivePayment(false)
    }

    const paymentActiveHandler=()=>{
        setActiveProductSummary(false)
        setActiveAddress(false)
        setActivePayment(true)
    }

    useEffect(()=>{
        if(isActiveProductSummary){
            ProSummaryRef.current.classList.add('active')
        }
        else{
            ProSummaryRef.current.classList.remove('active')
        }
        if(isActiveAddress){
            ProSummaryRef.current.nextElementSibling.classList.add('active')
        }
        else{
            ProSummaryRef.current.nextElementSibling.classList.remove('active')
        }
        if(isActivePayment){
            ProSummaryRef.current.parentNode.childNodes[2].classList.add('active')
        }
        else{
            ProSummaryRef.current.parentNode.childNodes[2].classList.remove('active')
        }
    },[isActiveProductSummary,isActiveAddress,isActivePayment])
    
  return (
    <section class="checkout-main-area">
            <div class="container">
                <div class="checkout-main-tab-area">
                   <div class="checkout-main-tab-information-main">
                     <div id="niiceeTab" class="page-content">
                            <nav class="niiceeTabBtn">
                            <button id="defaultOpen" class="tablinks" ref={ProSummaryRef} onClick={SummaryActiveHandler}>01. Summary</button>
                            <button class="tablinks" onClick={AddressActiveHandler} >02. Address</button>
                            <button class="tablinks" onClick={paymentActiveHandler}>03. Payment</button>
                        </nav>
                       <div class="tabbed niiceeTabContent">
                           <span class="card-shiping-item"> Your shopping cart contains:
                                <small>{ctxCart.getCartModel.Items.length} Product</small>
                            </span>
                            {
                                (isActiveProductSummary)&& <ProductSummary AddressActiveHandler={AddressActiveHandler}/>
                            }
                            {
                                (isActiveAddress)&& <AddressContextProvider><Address /></AddressContextProvider> 
                            }
                            {
                                (isActivePayment)&& <Payment />
                            }

                       </div>
                    </div>
                   </div>
                </div>
            </div>
        </section> 
  )
}

export default CheckoutBody