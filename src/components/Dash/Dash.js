import React, {Component} from 'react';
import {Classes, Button, InputGroup} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import request from "superagent";
import './dash.css';
import appConstants from "../app/appConstants";
import CaseMenu from "./CaseMenu/CaseMenu";
import caseTypes from "./CaseMenu/caseTypes";

class Dash extends Component {
    constructor() {
        super();
        this.onCaseChange = this.onCaseChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.uploadRecord = this.uploadRecord.bind(this);
    }

    state = {
        file: '',
        caseText: caseTypes[0],
        date: new Date(),
        amount: '',
        description: '',
        disabled: true,
    };

    onInputValueChange = (event) => {
        this.setState({
            // disabled: this.shouldDisableButton(),
            [event.target.name]: event.target.value,
        });
    };

    onCaseChange(value) {
        this.setState({
            caseText: value
        });
    };

    handleDateChange = (date) => this.setState({date});

    handleFileChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({
            file: file,
        });
    };

    uploadRecord = () => {
        const fileToUpload = this.state.file;
        console.log("fileToUpload", fileToUpload);
        request
            .put('http://localhost:8181/upload')
            .accept('application/json')
            .field('file', 'file')
            .field({
                'access_token': this.props.appUser.access_token,
                'case': this.state.caseText,
                'date': this.state.date,
                'amount': this.state.amount,
                'description': this.state.description,
            })
            .attach('file', fileToUpload)
            .end((err, res) => {
                if (err || !res.ok) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(res.body));
                }
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


                <div className="dash_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="pt-label">
                                    {appConstants.FILE}
                                </label>
                                <label className={`${Classes.LARGE} pt-file-upload dash_form_upload_field`}>
                                    <input type="file" className='pt-large' onChange={this.handleFileChange}/>
                                    <span
                                        className="pt-file-upload-input">{this.state.file !== '' ? this.state.file.name : 'Choose file...'}</span>
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
                                    name={appConstants.INPUT_AMOUNT}
                                    className={`${Classes.LARGE} input_group`}
                                    leftIconName="dollar"
                                    type='number'
                                    onChange={this.onInputValueChange}
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
                                <textarea
                                    name={appConstants.INPUT_DESCRIPTION}
                                    className="pt-input dash_form_desc_field"
                                    dir="auto"
                                    onChange={this.onInputValueChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1">
                                <Button
                                    className='cancel_button pt-large'
                                    onClick={() => {
                                    }}
                                    text={appConstants.CANCEL}
                                />
                            </div>
                            <div className="col-lg-1">
                                <Button
                                    className='upload_button pt-large pt-intent-primary'
                                    onClick={this.uploadRecord}
                                    text={appConstants.UPLOAD}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;