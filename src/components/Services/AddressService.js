const DISTRICTS=[
    {
        divisionId:1,
        districtId:101,
        name:"Dhaka"
    },
    {
        divisionId:1,
        districtId:102,
        name:"Gazipur"
    },
    {
        divisionId:1,
        districtId:103,
        name:"Narsingdhi"
    },
    {
        divisionId:2,
        districtId:104,
        name:"Sirajgonj"
    },
    {
        divisionId:2,
        districtId:105,
        name:"Pabna"
    },
    {
        divisionId:3,
        districtId:106,
        name:"Hobigonj"
    },
    {
        divisionId:3,
        districtId:107,
        name:"MouloviBajar"
    },
    {
        divisionId:4,
        districtId:108,
        name:"Lalmonirhat"
    },
    {
        divisionId:4,
        districtId:109,
        name:"Dinajpur"
    }
]

export const getDivision=()=>{
    return [
        {
            id:1,
            name:"Dhaka"
        },
        {
            id:2,
            name:"Rajshahi"
        },
        {
            id:3,
            name:"Sylhet"
        },
        {
            id:4,
            name:"Rangpur"
        }
    ]
}


export const getDistricts=(divisionId)=>{
    
    return (
        DISTRICTS.filter(item=>item.divisionId===divisionId)
    )
}

export const getAreas=(dsitrictId)=>{
    const areas=[
        {
            districtId:101,
            areaId:501,
            name:"Mirpur 12"
        },
        {
            districtId:101,
            areaId:502,
            name:"Mirpur 15"
        },
        {
            districtId:102,
            areaId:503,
            name:"Hatibandha"
        },
        {
            districtId:103,
            areaId:504,
            name:"Polashi"
        },
        {
            districtId:104,
            areaId:505,
            name:"Aditmari"
        },
        {
            districtId:105,
            areaId:506,
            name:"Patgram"
        },
        {
            districtId:106,
            areaId:507,
            name:"Pakerhat"
        },
        {
            districtId:107,
            areaId:508,
            name:"Khanshama"
        },
        {
            districtId:108,
            areaId:509,
            name:"Bogra"
        },
        {
            districtId:109,
            areaId:510,
            name:"Deodoba"
        },
    ]
    return(
        areas.filter(item=>item.districtId===dsitrictId)
    )
}
export const storeAddressObj={
    name:'',
    mobile:'',
    email:'',
    division:'',
    district:'',
    area:'',
    address:'',
    type:''
}