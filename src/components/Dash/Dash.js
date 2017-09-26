import React, {Component} from 'react';
import {Classes, Button, InputGroup} from "@blueprintjs/core";
import './dash.css';
import appConstants from "../app/appConstants";
import CaseMenu from "./CaseMenu/CaseMenu";

class Dash extends Component {
    constructor() {
        super();
        this.onCaseChange = this.onCaseChange.bind(this);
    }

    state = {
        caseText: ''
    };

    onCaseChange(value) {
        this.setState({
            caseText: value
        });
    };

    render() {
        return (
            <div className='dash'>
                <div className='dash_head'>
                    <Button
                        className='invoice_button'
                        iconName='add'
                        onClick={() => {
                        }}
                        text={appConstants.ADD_INVOICE}
                    />
                </div>
                <div className='dash_forms'>
                    <label className="pt-label">
                        {appConstants.AMOUNT}
                        <InputGroup
                            name={appConstants.AMOUNT}
                            className={`${Classes.LARGE} input_group`}
                            leftIconName="dollar"
                            type='number'
                            onChange={() => {
                            }}
                            placeholder={appConstants.AMOUNT}
                        />
                    </label>
                    <label className="pt-label">
                        {appConstants.CASE}
                        <CaseMenu
                            onChange={this.onCaseChange}/>
                    </label>
                </div>
            </div>
        );
    }
}

export default Dash;