import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated,loas_user} from '../actions/auth';

const Layout = (props) => {

    useEffect(() => {
        props.checkAuthenticated();
        props.loas_user();
    }, []);

    return (
        <div>
        <Navbar />
        {props.children}
    </div>

    ) 

};

export default connect(null,{ checkAuthenticated,loas_user}) (Layout);