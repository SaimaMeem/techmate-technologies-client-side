import React from 'react';
import Parts from './Parts/Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummarys/BusinessSummarys';
import FAQ from './FAQ';
import Features from './Features/Features';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Features></Features>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <FAQ></FAQ>
        </section>
    );
};

export default Home;