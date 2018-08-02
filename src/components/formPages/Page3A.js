import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';
import { setDevInfo } from '../../actions/contractInfo';

const styles = theme => ({
    root: {
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 2,
    },
    PageFormInput: {
        margin: 20
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Page3A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devUSstate: '',
            open: false
          };
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(2);
    }

    handleNextPageButtonClick = () => {
        this.props.changePage(4);
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
        this.handleNextButtonStatus;
    }

    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value });
        this.handleNextButtonStatus;
    }

    handleStreetChange = e => {
        this.setState({ street: e.target.value });
        this.handleNextButtonStatus;
    }

    handleCityChange = e => {
        this.setState({ city: e.target.value });
        this.handleNextButtonStatus;
    }

    handleUSstateChange = e => {
        this.setState({ devUSstate: e.target.value });
        console.log(this.state.devUSstate);
        this.handleNextButtonStatus;
    }

    handleZipChange = e => {
        this.setState({ zip: e.target.value });
        this.handleNextButtonStatus;
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(2);
    }

    handleNextPageButtonClick = () => {
        //ToDo: authentication
        const { firstName, lastName, street, city, devUSstate, zip } = this.state;
        this.props.setDevInfo({
            firstName, lastName, street, city, devUSstate, zip
        });
        this.props.changePage(4);
    }

    render() {
        const { classes, USstates } = this.props;
        const { devUSstate, nextButtonDisabled } = this.state;

        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                <div className='FormHeaderContainer'>
                    <Typography variant='title'>
                        Developer Information
                    </Typography>
                </div>
                <div className='FormHeaderContainer'>
                    <Typography variant='subheading'>
                        Please enter the following information about you, the developer. This will be your official name and address for the contract.
                    </Typography>
                </div>
                <FormControl component="fieldset" styles={{ margin: 20 }}>
                        <div className='FormInputContainer'>
                            <Input 
                                autoFocus={true}
                                placeholder="First Name"
                                onChange={this.handleFirstNameChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input 
                                placeholder="Last Name"
                                onChange={this.handleLastNameChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Street Address"
                                onChange={this.handleStreetChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="City"
                                onChange={this.handleCityChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">State</InputLabel>
                            <Select
                                open={this.state.open}
                                onChange={this.handleUSstateChange}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={devUSstate}
                                onChange={this.handleChange}
                                IconComponent={'union'}
                                inputProps={{
                                name: 'devUSstate',
                                id: 'controlled-open-select',
                                }}
                            >
                            {
                                USstates.USstates.map(USstate => (
                                    <MenuItem key={USstate.abbreviation} value={USstate.abbreviation}>{USstate.name}</MenuItem>
                                ))
                            
                            }
                            </Select>
                            </FormControl>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Zip Code"
                                onChange={this.handleZipChange}
                            >
                            </Input>
                        </div>
                </FormControl>
                <div className='PageBottomDiv'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        className={classes.button}
                        onClick={this.handlePreviousPageButtonClick}
                        >
                        <p className='ButtonText'>Previous</p>
                    </Button>  
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        disabled={false}
                        className={classes.button}
                        onClick={this.handleNextPageButtonClick}
                        >
                        <p className='ButtonText'>Next</p>
                    </Button>  
                </div>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber)),
    setDevInfo: (devInfo) => dispatch(setDevInfo(devInfo))
});

const mapStateToProps = (state) => ({
    USstates: state.USstates
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page3A));

// <InputLabel>
// <Typography variant='subheading'>
//     Developer's Full Name
// </Typography>
// </InputLabel>

//debugging alex

