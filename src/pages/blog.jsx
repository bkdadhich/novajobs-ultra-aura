import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
           <SEO pageTitle={"Blog"} /> 
           <Blog />
        </WrapperFour>
    );
};

export default index;