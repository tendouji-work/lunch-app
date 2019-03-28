import React, { Component } from 'react';
import styled from 'styled-components';

import { pageWidth } from '../../constants/appState';


class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    componentWillUnmount() {
    }

    render() {
        const { children } = this.props;

        return (
            <WrapperStyle className={`page-wrapper`}>
                {children}
            </WrapperStyle>
        );
    }
}


export default Wrapper;


const WrapperStyle = styled.div`
    width: calc(100% - 2rem);
    max-width: ${pageWidth}px;
    margin: 0 auto;
`;
