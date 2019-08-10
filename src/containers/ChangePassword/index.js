import React from "react";
import * as constants from '../../constants/Constant';
import { AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { isSuccess } from "../../utils";


import Validator from "../../validator";

import ChangePassword from "../../views/ChangePassword";
import {
    getLogin
} from "../../actions/login";

export default class ChangePasswordContainer extends React.PureComponent {
    state = {
        data: {
            oldPassword: '',
            newPassword: "",
            confirmPassword: '',
        },
        fetching: false,
        errors: {}
    };

    componentDidMount() {
        //this._getStorageValue();
    }
    _submit =()=>{
      alert(constants.kChangePasswordSuccess)
    }
    _cancel = () =>{
        this.props.navigation.navigate('MySettings');
    }

handleChange =(name, value) =>{
  this.setState({name:value});
}
    render() {
        const { data, errors, fetching } = this.state;
        return (
            <ChangePassword
                data={data}
                errors={errors}
                fetching={fetching}
                submit = {this._submit}
                handleChange = {this.handleChange}
                navigation={this.props.navigation}
            />

        )
    }

}