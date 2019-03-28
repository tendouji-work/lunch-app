import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../Wrapper';
import {
    colorGray,
    colorLightGray,
    fontColor,
    headerHeight,
} from '../../constants/appState';


class HeaderBar extends Component {
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
        const { customClassName } = this.props;

        return (
            <HeaderBarWrapper className={[
                `header`,
                (!!customClassName ? ' ' + customClassName : ''),
            ].join('')}>
                <Wrapper className={'header-wrapper'}>
                    <div className="logo">LA</div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>
                    </nav>
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
    
    & nav {
        height: 100%;
        
        & > ul {
            margin: 0;
            padding: 0;
            list-style: none;
            height: 100%;
            
            & > li {
                display: inline-block;
                height: 100%;
                line-height: ${headerHeight}px;
            }
        }
        
        & a {
            display: inline-block;
            padding: 0 1rem;    
            text-decoration: none;
            color: ${fontColor};
        }
    }
`;
