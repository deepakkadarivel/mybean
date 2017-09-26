import React from 'react';
import FilterLinkContainer from "../filterLink/FilterLinkContainer";
import filterLinkStateTypes from "../filterLink/filterLinkStateTypes";

const Footer = () => {
    return (
        <div>
            Show :
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_ALL}
            >
                All
            </FilterLinkContainer>
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_ACTIVE}
            >
                Active
            </FilterLinkContainer>
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_COMPLETE}
            >
                Complete
            </FilterLinkContainer>
        </div>
    );
};

export default Footer;
