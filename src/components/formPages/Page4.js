import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';

const style = theme => ({
    root: {
        minHeight: 600
    }
});

class Page4 extends Component {
    constructor(props) {
        super(props);
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(3);
    }

    handleNextPageButtonClick = () => {
        this.props.changePage(5);
    }

    render() {
        return (
            <Paper classes={{root: this.props.classes.root}} elevation={1}>
                Page 4
                <button onClick={this.handlePreviousPageButtonClick}>Previous Page</button>
                <button onClick={this.handleNextPageButtonClick}>Next Page</button>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber))
});

export default connect(undefined, mapDispatchToProps)(withStyles(style)(Page4));
