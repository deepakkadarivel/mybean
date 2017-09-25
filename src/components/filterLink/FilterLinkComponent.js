import React from 'react';
import PropTypes from 'prop-types';

const FilterLinkComponent = ({children, filter, currentFilter, setVisibilityFilter}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={(e) => {
               e.preventDefault();
               setVisibilityFilter(filter)
           }}>
            {children}
        </a>
    );
};

FilterLinkComponent.propTypes = {
    children: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
};

export default FilterLinkComponent;
