import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Techmate Technologies | {title}</title>
        </Helmet>
    );
};

export default PageTitle;