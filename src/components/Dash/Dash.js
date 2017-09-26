import React, {Component} from 'react';
import {Classes, Button, InputGroup} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import './dash.css';
import appConstants from "../app/appConstants";
import CaseMenu from "./CaseMenu/CaseMenu";

class Dash extends Component {
    constructor() {
        super();
        this.onCaseChange = this.onCaseChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    state = {
        caseText: '',
        date: new Date(),
    };

    onCaseChange(value) {
        this.setState({
            caseText: value
        });
    };

    handleDateChange = (date) => this.setState({date});

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


                <div className="dash_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="pt-label">
                                    {appConstants.FILE}
                                </label>
                                <label className={`${Classes.LARGE} pt-file-upload dash_form_upload_field`}>
                                    <input type="file" className='pt-large'/>
                                    <span className="pt-file-upload-input">Choose file...</span>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <label className="pt-label">
                                    {appConstants.CASE}
                                <CaseMenu
                                    onChange={this.onCaseChange}/>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="pt-label">
                                    {appConstants.AMOUNT}
                                </label>
                                <InputGroup
                                    name={appConstants.AMOUNT}
                                    className={`${Classes.LARGE} input_group`}
                                    leftIconName="dollar"
                                    type='number'
                                    onChange={() => {
                                    }}
                                    placeholder={appConstants.AMOUNT}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label className="pt-label">
                                    {appConstants.DUE_DATE}
                                </label>
                                <DateInput
                                    defaultValue={new Date()}
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                    closeOnSelection={true}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="pt-label">
                                    {appConstants.DESCRIPTION}
                                </label>
                                <textarea className="pt-input pt-intent-primary dash_form_desc_field" dir="auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;