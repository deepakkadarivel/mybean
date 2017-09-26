import React from 'react';
import FilterLinkContainer from "../filterLink/FilterLinkContainer";
import filterLinkStateTypes from "../filterLink/filterLinkStateTypes";

const Footer = ({visibilityFilter}) => {
    return (
        <div>
            Show :
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_ALL}
                currentFilter={visibilityFilter}
            >
                All
            </FilterLinkContainer>
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_ACTIVE}
                currentFilter={visibilityFilter}
            >
                Active
            </FilterLinkContainer>
            {' '}
            <FilterLinkContainer
                filter={filterLinkStateTypes.SHOW_COMPLETE}
                currentFilter={visibilityFilter}
            >
                Complete
            </FilterLinkContainer>
        </div>
    );
};

export default Footer;
