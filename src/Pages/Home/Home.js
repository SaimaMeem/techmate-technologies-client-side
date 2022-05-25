import React from 'react';
import Parts from './Parts/Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummarys/BusinessSummarys';
import FAQ from './FAQ';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Features></Features>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <FAQ></FAQ>
            <Reviews></Reviews>
        </section>
    );
};

export default Home;