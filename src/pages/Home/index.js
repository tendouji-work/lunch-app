import React, { Component } from 'react';
import styled from 'styled-components';
import withRedux from '../../components/PageContent';
import {
    borderRadius,
    colorGray,
    commonGap,
} from '../../constants/appState';
import "react-datepicker/dist/react-datepicker.css";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date()
        };
    }

    componentDidMount() {


    }

    componentDidUpdate(prevProps) {
    }

    componentWillUnmount() {
    }

    onCalendarChangeHandler = (date) => {
        this.setState({
            startDate: date
        });
    };

    render() {
        const {} = this.props;

        console.log(this.props);

        return (
            <HomeWrapper>
                Home
            </HomeWrapper>
        );
    }
}


export default withRedux(Home, 'page-home');


const HomeWrapper = styled.div`
    & .react-datepicker-wrapper, 
    & .react-datepicker__input-container {
        width: 100%;
    }
    
    & input[type="text"] {
        width: 100%;
        padding: 0 ${commonGap}px; 
        border: 1px solid ${colorGray};
        border-radius: ${borderRadius}px;
        box-sizing: border-box;
        line-height: 1.6rem;
        
        &:focus {
            border-color: ${colorGray};
            outline: none;
        }
    }
`;
