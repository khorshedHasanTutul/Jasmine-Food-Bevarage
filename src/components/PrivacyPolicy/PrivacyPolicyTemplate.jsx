import React from 'react';

const PrivacyPolicyCon = [
    {
        PpHeading: "How We Use Personal Information",
        PpDesc : "We collect your personal information to deliver customer service. It enables us to give you access to our products and services. We collect from you only a minimum of personal information on our websites (such as your name, mailing address, email address, phone number, or credit card information) that is necessary to authenticate and process your order and subscription; provide you with order and subscription support; send you communications related to your order and subscription; and enable you to participate in special offers and other site features. We may use personal information to provide products that you have requested as well as for auditing, research, and analysis to improve LurraLife's services and products."
    },
    {
        PpHeading: "Cookies, Click-Trough’s and Pixel Tags",
        PpDesc : "Like many websites, cookies are used to enable our Site's or service provider's systems to recognize your internet browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. This information can include Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), operating system, date/time stamp, and referring/exit pages. This information, which does not identify individual users, would only be used to analyze trends, to administer the site, to track users’ movements around the sites and to gather miscellaneous demographic information about our visitors as a whole."
    },
    {
        PpHeading: "How We Protect Personal Information",
        PpDesc : "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above."
    }

]

const PrivacyPolicyTemplate = () => {
    return (
        <section class="return-policy-area">
            <div class="container">
                <div class="return-main-flex">
                    {
                      PrivacyPolicyCon.map(usePrivacyPolicyCon => (
                        <div class="serial-notice">
                            <h2>{usePrivacyPolicyCon.PpHeading}</h2>
                            <p>{usePrivacyPolicyCon.PpDesc}</p>    
                        </div>
                    ))  
                }

                </div>
            </div>
       </section>
    );
};

export default PrivacyPolicyTemplate;