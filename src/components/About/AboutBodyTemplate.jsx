import React from 'react';

const AboutSer = [
    {
        aHeading: 'About Jasmin',
        aDesc   : " We offer excellent value to our customers by bringing them high quality & original brand products from UK USA Korea & Around the world at competitive prices We have in place efficient system and passionate people to source health and beauty products of your choice. Now that we have made shopping of high quality, original brand products from across the world easy for you, you do not need to use fake products, replica cosmetics made of harmful chemicals. Use best products from all over the world to keep your health and beauty bold.Have a look around our range of collection and order your products straight away. Or, if you are interested in any particular product/brand on any WEBSITE of Europe, UK, USA based company please do get in touch with us, we will bring it to you."
    },
    {
        aHeading: 'Payment Procedure',
        aDesc   : "Customers can pay via Cash-On-Delivery, Bkash, or Credit Card. Cash on delivery system is commonly chosen by most customers because of its convenience factors. We also want customers to check their products before paying, this helps to build their trust in us. If customers have any issues with either of the three payment options, then they can contact us for an alternative solution."
    },
    {
        aHeading: 'Delivery System',
        aDesc   : " Once you place an order, our customer service team will confirm with you before delivering the product. All of the products will be checked by our quality control team to make sure that the product is up to date and authentic, then it will be sent to customers. You will receive products within 24 hours after ordering. We are currently operational only inside Dhaka City."
    },
    {
        aHeading: 'Conclusion',
        aDesc   : "Chef Cart caters to provide its customers with the best service that we possibly can. We want to make online grocery shopping fun, enjoyable, and convenient. Don’t get fooled by fake retailers providing unauthentic products. Shop at Chef Cart for a safe and hassle-free experience. Looking into our catalog, you will find products that include Baking and cooking, Baby care, Frozen item, chaldal, moyda, Health and Beauty, etc."
    }
]


const ourPromise = [
    {
        pHeading : "Blggest Varlety",
        pDesc : "We Offer Millon Of Products At a Great Value For Our Customar",
    },
    {
        pHeading : "Best Prlces",
        pDesc : "We Provide Great Value By Offering Competitive Price On All Our Products",
    },
    {
        pHeading : "Ease & Speed",
        pDesc : "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Ducimus Eaque Sunt Provident Molestias Iste Similique Cumque.",
    },
    {
        pHeading : "Fast Dellvery",
        pDesc : "We Aim To Please Our Customers With Fast Delivery And Easy Tracking System",
    },
    {
        pHeading : "100% Protected",
        pDesc : "We Provide 100% Protection For Your Pruchase From Click To Delivery",
    },
]

const proHeading = {
    proText : "Our Promise",
}

const AboutBodyTemplate = () => {
    return (
        <>
            <section class="about-us-area">
                <div class="container">
                    <div class="about-us-banner">
                        <img src="/contents/assets/images/about.jpg" alt="about" />
                    </div>
                </div>
            </section>
            <section class="about-content-area">
                <div class="container">
                    <div class="about-us-content-main">
                        {
                            AboutSer.map(useMe => (
                                <div class="about">
                                    <div class="common-heading">
                                        <h1>{useMe.aHeading}</h1>
                                    </div>
                                    <p>{useMe.aDesc}</p>
                                </div>
                            ))
                        }
                       
                    </div>
                </div>
            </section>
            <section class="about-promise-area">
                <div class="container">
                    <div class="about-promise-main">
                    <div class="common-heading">
                        <h1>{proHeading.proText}</h1>
                    </div>
                    <div class="our-promise-single-main">
                        {
                        ourPromise.map(usePromise => (
                            <div class="single-promise-item">
                                <div class="promise-icon">
                                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                                </div>
                                <div class="promise-content">
                                    <h3>{usePromise.pHeading}</h3>
                                    <p>{usePromise.pDesc}</p>
                                </div>
                            </div>
                           )) 
                        }
                    </div>
                    </div>
                </div>
             </section>

        </>

    );
};

export default AboutBodyTemplate;