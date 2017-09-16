import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './button.css';

class Button extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.onClick();
    };

    render() {
        return (
            <div className='row justifyCenter'>
                <button
                    type='button'
                    className={this.props.buttonClass}
                    onClick={this.handleClick}
                >{this.props.name}</button>
            </div>
        );
    }

}

Button.propTypes = {
    buttonClass: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
