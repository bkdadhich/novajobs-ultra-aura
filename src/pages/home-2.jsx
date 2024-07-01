import React from 'react';
import SEO from '../common/seo';
import HomeTwo from '../components/homes/home-2';
import WrapperTwo from '../layout/wrapper-2';

const index = () => {
    return (
        <WrapperTwo>
            <SEO pageTitle={"Home-2"} />
            <HomeTwo />
        </WrapperTwo>
    );
};

export default index;