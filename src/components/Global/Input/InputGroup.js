import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './inputGroup.css';

class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        this.props.onChange(field, value);
    };

    render() {
        return (
            <div className='row justifyCenter'>
                <div className='pt-input-group pt-large loginInputGroup'>
                    <span className={this.props.icon}/>
                    <input
                        name={this.props.name}
                        type={this.props.type}
                        className='pt-input'
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
};

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
    icon: '',
    placeholder: '',
    type: 'text',
};

export default InputGroup;
