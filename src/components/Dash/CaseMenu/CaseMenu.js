import React, {Component} from 'react';
import caseTypes from "./caseTypes";
import {Classes} from "@blueprintjs/core";

class CaseMenu extends Component {

    constructor() {
        super();
        this.state = {
            selectedValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target: {value}}) {
        this.props.onChange(value);
        this.setState({selectedValue: value});
    }

    render() {
        return (
            <div className={`${Classes.LARGE} pt-select`} style={{marginTop: '14px'}}>
                <select
                    value={this.state.selectedValue}
                    onChange={this.handleChange}
                >
                    {caseTypes.map(text => {
                        return (
                            <option
                                key={text}
                                value={text}
                            >
                                {text}
                            </option>
                        )
                    })}
                </select>
            </div>
        );
    }
};

export default CaseMenu;