import React from 'react';
import PropTypes from 'prop-types';
import './callout.css';

const Callout = ({name, header, message}) => {
    return (
        <div className={`pt-callout ${name}`}>
            {header &&<h5>{header}</h5>}
            {message}
        </div>
    );
};

Callout.propTypes = {
    name: PropTypes.string.isRequired,
    header: PropTypes.string,
    message: PropTypes.string.isRequired,
};

export default Callout;