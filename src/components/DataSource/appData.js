import Home from "../../pages/Home";
import { UrlAboutRoute, UrlCarrerRoute, UrlContactRoute, UrlHomeRoute, UrlOfferRoute, UrlReviewRoute } from "../Services/UrlService";

var appData={
    TopHeader:[
        {
            mail:"info@jasmin.com",
            phone:"01778-772327",
            message:"Trusted Online Shopping Site in Bangladesh"
        }
    ],
    MiddleHeader:[
        {
            logo:"/contents/assets/images/logo-01.png"
        }
    ],
    BottomHeader:[
        {
            navLink:[
                {
                    name:"Home",
                    to:UrlHomeRoute
                },
                {
                    name:"Special Offer",
                    to:UrlOfferRoute
                },
                {
                    name:"About Us",
                    to:UrlAboutRoute
                },
                {
                    name:"Review",
                    to:UrlReviewRoute
                },
                {
                    name:"Carrer",
                    to:UrlCarrerRoute
                },
        
                {
                    name:"Contact Us",
                    to:UrlContactRoute
                },
            ]
        },
        {
            dropDownCategoryName:"Shop Categories",   
            dropDownCategoryItem:[
                {
                    categoryId:1,
                    visible:true,
                    categoryName:"Spices",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Cumin Powder"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Termeric Powder"
                        },
                        {
                            subCategoryId:3,
                            subCategoryName:"Chilli Powder"
                        },
                        {
                            subCategoryId:4,
                            subCategoryName:"Coriander Powder"
                        },
                        {
                            subCategoryId:5,
                            subCategoryName:"Garam Mosala"
                        },
                        {
                            subCategoryId:6,
                            subCategoryName:"Cardamom"
                        },
                        {
                            subCategoryId:7,
                            subCategoryName:"Clove"
                        },
                        {
                            subCategoryId:8,
                            subCategoryName:"Black Paper"
                        },
                        {
                            subCategoryId:9,
                            subCategoryName:"Mace"
                        },
                    ]
                },
                {
                    categoryId:2,
                    visible:true,
                    categoryName:"Oil",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Mustard OId"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Coconut Oil"
                        },
                        {
                            subCategoryId:3,
                            subCategoryName:"Sorisar Oil"
                        },
                        {
                            subCategoryId:4,
                            subCategoryName:"Tibbat Oil"
                        }
                    ]
                },
                {
                    categoryId:3,
                    visible:true,
                    categoryName:"Flour",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Brown Atta"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Wheat Flour"
                        },
                        {
                            subCategoryId:3,
                            subCategoryName:"Mixed Pulse Flour"
                        },
                        {
                            subCategoryId:4,
                            subCategoryName:"Wheat Flour"
                        }
                    ]
                },
                {
                    categoryId:4,
                    visible:false,
                    categoryName:"Dal or Lentil",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Lentil"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Mug Dal"
                        },
                        {
                            subCategoryId:3,
                            subCategoryName:"Kashmeri Dal"
                        },
                        {
                            subCategoryId:4,
                            subCategoryName:"Mashkalai Dal"
                        }
                    ]

                },
                {
                    categoryId:5,
                    visible:false,
                    categoryName:"Shemai & Suzi",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Jesmine Laccha Shemai"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Jesmine Kichmich"
                        },
                        {
                            subCategoryId:3,
                            subCategoryName:"Jesmine Dalda"
                        },
                        {
                            subCategoryId:4,
                            subCategoryName:"jasmine Suzi"
                        }
                    ]
                },
                {
                    categoryId:6,
                    visible:false,
                    categoryName:"Tea & Coffeae",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Raj Black Tea"
                        }
                    ]
                },
                {
                    categoryId:7,
                    visible:false,
                    categoryName:"Pickle",
                    subCategory:[
                        {
                            subCategoryId:1,
                            subCategoryName:"Jasmine Mongo Pickle"
                        },
                        {
                            subCategoryId:2,
                            subCategoryName:"Jasmine Garlic Pickle"
                        }
                    ]
                }

            ]
        }
    ],
    Banner:[
        {
            id:1,
            image:"/contents/assets/images/slider/b1.png"
        },
        {
            id:2,
            image:"/contents/assets/images/slider/b2.png"
        },
        {
            id:3,
            image:"/contents/assets/images/slider/b3.png"
        },
        {
            id:4,
            image:"/contents/assets/images/slider/b4.png"
        },
        {
            id:5,
            image:"/contents/assets/images/slider/b5.png"
        },
        {
            id:6,
            image:"/contents/assets/images/slider/b6.png"
        },
        {
            id:7,
            image:"/contents/assets/images/slider/b7.png"
        }
    ],
    categoryProducts: [
        {
          Id: "8edcd73d-f733-4552-a870-0002a314f1edc",
          Nm: "Cumin powder",
          GN: "LEVOTHYROXINE SODIUM",
          St: "10g",
          Ct: "Tab",
          Sp: "GSK BANGLADESH LTD",
          MRP: 255,
          Ds: 10,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p1.jpg",
          brand_id:1,
          category_id:1,
          subCategory_id:1,
          subCategory_item_id:1,
          offer_status:false,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()+10),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "7486379c-bcbb-417f-9907-000d13ab55ccc",
          Nm: "CISPLATIN HEXAL ",
          GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
          St: "10 mg",
          Ct: "Injection",
          Sp: "NOVARTIS (BANGLADESH) LTD.",
          MRP: 419,
          Ds: 15,
          Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p2.jpg",
          brand_id:1,
          category_id:2,
          subCategory_id:1,
          subCategory_item_id:2,
          offer_status:true,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()+11),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "14496621-fa26-416e-9e62-000f7aae20fdc",
          Nm: "ACTIKID MAGIC BEANS",
          GN: "VITAMIN C",
          St: ".",
          Ct: "Tab",
          Sp: "CATALYST HEALTH CARE",
          MRP: 950,
          Ds: 0,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p3.jpg",
          brand_id:1,
          category_id:3,
          subCategory_id:1,
          subCategory_item_id:3,
          offer_status:false,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()-7),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
          Nm: "LACTOGIN",
          GN: "IMPROVE LACTATION",
          St: ".",
          Ct: "Cap",
          Sp: "MIX MEDICAL",
          MRP: 25,
          Ds: 20,
          Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
          Tp: "0",
          Stk: 60,
          image: "/contents/assets/images/product/p4.jpg",
          brand_id:2,
          category_id:1,
          subCategory_id:1,
          subCategory_item_id:4,
          offer_status:true,
          FestivalCategory_id:3,
          created_at:(new Date().getDate()-7),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "d2605b95-b067-4170-a624-001c1f21f194c",
          Nm: "ANXIO",
          GN: "BROMAZEPAM",
          St: "3 MG",
          Ct: "Tab",
          Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
          MRP: 4.5,
          Ds: 10,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 20,
          image: "/contents/assets/images/product/p5.jpg",
          brand_id:3,
          category_id:2,
          subCategory_id:1,
          subCategory_item_id:5,
          offer_status:false,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()-7),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "02defa41-158b-4d2d-90bd-0024c0d8b226c",
          Nm: "HIMALAYA ANTI-WRINKLE",
          GN: "BEAUTY CREAM",
          St: "50 GM",
          Ct: "CREAM (TOILETIES)",
          Sp: "RIGS MARKETING",
          MRP: 450,
          Ds: 0,
          Pt: "",
          Tp: "0",
          Stk: 3,
          image: "/contents/assets/images/product/p1.jpg",
          brand_id:4,
          category_id:3,
          subCategory_id:1,
          subCategory_item_id:4,
          offer_status:true,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()-7),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "14bec93c-1cc1-44db-9c84-0024e74118f8c",
          Nm: "FULSPEC",
          GN: "MEROPENEM",
          St: "1 G",
          Ct: "Injection IV",
          Sp: "ACME LABORATORIES LTD.",
          MRP: 1208.15,
          Ds: 25,
          Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p2.jpg",
          brand_id:5,
          category_id:1,
          subCategory_id:3,
          subCategory_item_id:1,
          offer_status:false,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()-7),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "bfad512d-3cb1-4f67-b65c-0028485da9dfc",
          Nm: "ONRIVA PLUS BEXICAP",
          GN: "Glycopyrronium,Glicopironio",
          St: "50 GM",
          Ct: "Cap",
          Sp: "BEXIMCO CONSUMER LTD",
          MRP: 2100,
          Ds: 15,
          Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
          Tp: "0",
          Stk: 1,
          image: "/contents/assets/images/product/p3.jpg",
          brand_id:6,
          category_id:2,
          subCategory_id:5,
          subCategory_item_id:4,
          offer_status:true,
          FestivalCategory_id:3,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "f317f99e-603d-44f5-995e-002c82ca9f45c",
          Nm: "MILAM",
          GN: "MIDAZOLAM",
          St: "15MG",
          Ct: "Injection IM/IV",
          Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
          MRP: 120,
          Ds: 35,
          Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p4.jpg",
          brand_id:7,
          category_id:3,
          subCategory_id:3,
          subCategory_item_id:2,
          offer_status:false,
          FestivalCategory_id:1,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "7c159a2d-ed4a-483f-96a9-003111c84f06c",
          Nm: "IGLOO STRAWBERRY CHEESECAKE",
          GN: "ICE CREAM",
          St: ".",
          Ct: "Toiletries",
          Sp: "IGLOO ICE CREAM",
          MRP: 50,
          Ds: 0,
          Pt: "",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p5.jpg",
          brand_id:8,
          category_id:1,
          subCategory_id:4,
          subCategory_item_id:5,
          offer_status:true,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "8edcd73d-f733-4552-a870-0002a314f1ed",
          Nm: "ELTROXIN",
          GN: "LEVOTHYROXINE SODIUM",
          St: "50 MCG",
          Ct: "Tab",
          Sp: "GSK BANGLADESH LTD",
          MRP: 255,
          Ds: 25,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p1.jpg",
          brand_id:2,
          category_id:2,
          subCategory_id:2,
          subCategory_item_id:3,
          offer_status:false,
          FestivalCategory_id:3,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "7486379c-bcbb-417f-9907-000d13ab55cc",
          Nm: "CISPLATIN HEXAL ",
          GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
          St: "10 mg",
          Ct: "Injection",
          Sp: "NOVARTIS (BANGLADESH) LTD.",
          MRP: 419,
          Ds: 50,
          Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p2.jpg",
          brand_id:14,
          category_id:3,
          subCategory_id:1,
          subCategory_item_id:3,
          offer_status:true,
          FestivalCategory_id:1,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "14496621-fa26-416e-9e62-000f7aae20fd",
          Nm: "ACTIKID MAGIC BEANS",
          GN: "VITAMIN C",
          St: ".",
          Ct: "Tab",
          Sp: "CATALYST HEALTH CARE",
          MRP: 950,
          Ds: 35,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p3.jpg",
          brand_id:15,
          category_id:1,
          subCategory_id:3,
          subCategory_item_id:4,
          offer_status:false,
          FestivalCategory_id:2,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42",
          Nm: "LACTOGIN",
          GN: "IMPROVE LACTATION",
          St: ".",
          Ct: "Cap",
          Sp: "MIX MEDICAL",
          MRP: 25,
          Ds: 20,
          Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
          Tp: "0",
          Stk: 60,
          image: "/contents/assets/images/product/p4.jpg",
          brand_id:16,
          category_id:2,
          subCategory_id:3,
          subCategory_item_id:5,
          offer_status:true,
          FestivalCategory_id:3,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "d2605b95-b067-4170-a624-001c1f21f194",
          Nm: "ANXIO",
          GN: "BROMAZEPAM",
          St: "3 MG",
          Ct: "Tab",
          Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
          MRP: 4.5,
          Ds: 10,
          Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
          Tp: "0",
          Stk: 20,
          image: "/contents/assets/images/product/p5.jpg",
          brand_id:1,
          category_id:3,
          subCategory_id:3,
          subCategory_item_id:4,
          offer_status:false,
          FestivalCategory_id:null,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "02defa41-158b-4d2d-90bd-0024c0d8b226",
          Nm: "beauty Cream",
          GN: "BEAUTY CREAM",
          St: "50 GM",
          Ct: "CREAM (TOILETIES)",
          Sp: "RIGS MARKETING",
          MRP: 450,
          Ds: 0,
          Pt: "",
          Tp: "0",
          Stk: 3,
          image: "/contents/assets/images/product/p1.jpg",
          brand_id:1,
          category_id:1,
          subCategory_id:3,
          subCategory_item_id:4,
          offer_status:true,
          FestivalCategory_id:1,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "14bec93c-1cc1-44db-9c84-0024e74118f8",
          Nm: "FULSPEC",
          GN: "MEROPENEM",
          St: "1 G",
          Ct: "Injection IV",
          Sp: "ACME LABORATORIES LTD.",
          MRP: 1208.15,
          Ds: 0,
          Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p2.jpg",
          brand_id:1,
          category_id:2,
          subCategory_id:3,
          subCategory_item_id:5,
          offer_status:false,
          FestivalCategory_id:2,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "bfad512d-3cb1-4f67-b65c-0028485da9df",
          Nm: "ONRIVA PLUS BEXICAP",
          GN: "Glycopyrronium,Glicopironio",
          St: "50 GM",
          Ct: "Cap",
          Sp: "BEXIMCO CONSUMER LTD",
          MRP: 2100,
          Ds: 15,
          Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
          Tp: "0",
          Stk: 1,
          image: "/contents/assets/images/product/p3.jpg",
          brand_id:4,
          category_id:3,
          subCategory_id:3,
          subCategory_item_id:4,
          offer_status:true,
          FestivalCategory_id:3,
          created_at:(new Date().getDate()),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "f317f99e-603d-44f5-995e-002c82ca9f45",
          Nm: "MILAM",
          GN: "MIDAZOLAM",
          St: "15MG",
          Ct: "Injection IM/IV",
          Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
          MRP: 120,
          Ds: 10,
          Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p4.jpg",
          brand_id:13,
          category_id:1,
          subCategory_id:3,
          subCategory_item_id:4,
          offer_status:false,
          FestivalCategory_id:1,
          created_at:(new Date().getDate()-5),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        },
        {
          Id: "7c159a2d-ed4a-483f-96a9-003111c84f06",
          Nm: "IGLOO STRAWBERRY CHEESECAKE",
          GN: "ICE CREAM",
          St: ".",
          Ct: "Toiletries",
          Sp: "IGLOO ICE CREAM",
          MRP: 50,
          Ds: 0,
          Pt: "",
          Tp: "0",
          Stk: 0,
          image: "/contents/assets/images/product/p5.jpg",
          brand_id:12,
          category_id:2,
          subCategory_id:5,
          subCategory_item_id:1,
          offer_status:true,
          FestivalCategory_id:2,
          created_at:(new Date().getDate()-5),
          offer_image:"/contents/assets/images/product/sp1.jpg"
        }
      ],

}
export default appData;