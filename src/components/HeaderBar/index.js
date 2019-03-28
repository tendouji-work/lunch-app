import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import {
    colorGray,
    colorLightGray,
    fontColor,
    headerHeight,
} from '../../constants/appState';


class HeaderBar extends Component {
    render() {
        const { customClassName } = this.props;

        return (
            <HeaderBarWrapper className={[
                `header`,
                (!!customClassName ? ' ' + customClassName : ''),
            ].join('')}>
                <Wrapper className={'header-wrapper'}>
                    <div className="logo">LA</div>
                    <div className="title">FourSquare Lunch App</div>
                </Wrapper>
            </HeaderBarWrapper>
        );
    }
}


export default HeaderBar;


const HeaderBarWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${headerHeight}px;
    border-bottom: 1px solid ${colorGray};
    
    & .page-wrapper {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    
    & .logo {
        display: flex;
        height: 100%;
        padding: 0 1rem;
        background-color: ${colorLightGray};
        align-items: center;
    }
    
    & title {
        height: 100%;
    }
`;
