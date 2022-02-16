import React from 'react';
import AboutBodyTemplate from './AboutBodyTemplate';
import AboutHeader from './AboutHeader';

const AboutParent = () => {
    return (
        <div>
            <AboutHeader / >
            <AboutBodyTemplate />
        </div>
    );
};

export default AboutParent;