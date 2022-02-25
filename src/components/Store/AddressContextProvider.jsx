import React, { useReducer } from 'react'
import addressContext from './address-context';

const initialState=()=>{
    const initial={
        division:[],
        district:[],
        area:[],
        activeType:"Home",
    }
    return {
        ...initial
    }
}

const reducer=(state,action)=>{

    if(action.type==="STORE_DIVISION_ITEM"){
        let ctxDivision=state.division
        ctxDivision=(action.item)

        return{
            ...state,
            division:ctxDivision
        }
    }

    if(action.type==="STORE_DISTRICT_ITEM"){
        let ctxDistrict=state.district
        ctxDistrict=(action.item)
        return{
            ...state,
            district:ctxDistrict
        }
    }

    if(action.type==="STORE_AREA_ITEM"){
        let ctxArea=state.area
        ctxArea=(action.item)
        return{
            ...state,
            area:ctxArea
        }
    }
    if(action.type==="SET_ACTIVE_TYPE"){
        let ctxActiveType=state.activeType
        ctxActiveType=(action.item.type)
        return{
            ...state,
            activeType:ctxActiveType
        }
    }

}

const AddressContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState());

    const storeDivisionHandler=(item)=>{
        dispatch({type:"STORE_DIVISION_ITEM",item:item})
    }
    const storeDistrictHandler=(item)=>{
        dispatch({type:"STORE_DISTRICT_ITEM",item:item})
    }
    const storeAreaHandler=(item)=>{
        dispatch({type:"STORE_AREA_ITEM",item:item})
    }
    const activeTypeHandler=(item)=>{
        dispatch({type:"SET_ACTIVE_TYPE",item:item})
    }

    const context={
        storeDivision:storeDivisionHandler,
        getDivision:state.division,
        storeDistrict:storeDistrictHandler,
        getDistrict:state.district,
        storeArea:storeAreaHandler,
        getArea:state.area,
        setActiveType:activeTypeHandler,
        getActiveType:state.activeType
    }

  return (
      <addressContext.Provider value={context}>{children}</addressContext.Provider>
  )
}

export default AddressContextProvider