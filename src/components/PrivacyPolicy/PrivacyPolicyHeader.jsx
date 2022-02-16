import React from 'react';
import { Link } from 'react-router-dom'
import { UrlHomeRoute } from '../Services/UrlService'

const PrivacyPolicyHeader = () => {
    return (
        <section class="breadcrumb-main-area">
            <div class="container">
                <nav aria-label="breadcrumb" class="breadcrumb-main">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={UrlHomeRoute()}>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default PrivacyPolicyHeader;