import React from 'react';
import Parts from './Parts/Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummarys/BusinessSummarys';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </section>
    );
};

export default Home;