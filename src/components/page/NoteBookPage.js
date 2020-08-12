// src/components/page/SamplePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'NoteBook', x: 0, y: 0, w: 4, h: 6 },
    ],
    md: [
        { i: 'NoteBook', x: 0, y: 0, w: 4, h: 6 },
    ],
    sm: [
        { i: 'NoteBook', x: 0, y: 0, w: 4, h: 6 },
    ],
    xs: [
        { i: 'NoteBook', x: 0, y: 0, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'NoteBook', x: 0, y: 0, w: 4, h: 6 },
    ],
};

const initialBlocks = [
    { i: 'NoteBook' },
];

class SamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

SamplePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SamplePage);
