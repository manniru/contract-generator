import React from 'react';
import {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogTabContent1A from './DialogTabContent1A';
import DialogTabContent2A from './DialogTabContent2A';
import DialogTabContent3A from './DialogTabContent3A';

const style = {
    tabLabel: {
        fontSize: 14
    }
}

class PaymentTermsDialog extends Component {

    state = {
        value: 0
    };

    handleClose = () => {
        this.props.onClose();
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        
        const { open } = this.props;

        return (
            <Dialog open={open} onClose={this.handleClose}>
                <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth={true} >
                    <Tab label="One-Time Fee" classes={{label: this.props.classes.tabLabel}} />
                    <Tab label="Hourly Rate" classes={{label: this.props.classes.tabLabel}} />
                    <Tab label="Retainer" classes={{label: this.props.classes.tabLabel}} />
                </Tabs>
                {this.state.value === 0 && <DialogTabContent1A />}
                {this.state.value === 1 && <DialogTabContent2A />}
                {this.state.value === 2 && <DialogTabContent3A />}
            </Dialog>    
        );
    }

}

PaymentTermsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default withStyles(style)(PaymentTermsDialog);