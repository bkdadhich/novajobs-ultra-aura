import React from 'react';
import SEO from '../common/seo';
import HomeThree from '../components/homes/home-3';
import WrapperThree from '../layout/wrapper-3';

const index = () => {
    return (
        <WrapperThree>
            <SEO pageTitle={"Home 3"} />
            <HomeThree />
        </WrapperThree>
    );
};

export default index;