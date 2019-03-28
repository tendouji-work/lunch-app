import React, { Component } from 'react';
import styled from 'styled-components';
import withWrapper from '../../components/PageContent';
import {
    borderRadius, colorBlue, colorDarkGray,
    colorGray,
    colorLightGray, colorWhite,
    commonGap,
    foursquareClientAPI,
    foursquareClientAPI_post,
    foursquareClientAPI_pre,
    foursquareSampleResp,
    headerHeight,
} from '../../constants/appState';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: 'NYC',
            queryResult: [],
            tableData: [],
            participantList: [{
                name: 'Peter',
                selected: 1,
            }],
            isLoading: false
        };
    }

    componentDidMount() {
        this.fetchFQData('NYC')
    }

    componentDidUpdate(prevProps) {
    }

    componentWillUnmount() {
    }

    fetchFQData = (loc) => {
        const getURL = foursquareClientAPI + foursquareClientAPI_pre + loc + foursquareClientAPI_post;

        this.setState({
            isLoading: true
        });

        return (
            fetch(getURL)
                .then((response) => {
                    return response.json();
                    // return JSON.parse(foursquareSampleResp);
                })
                .then((respJson) => {
                    this.setState({
                        participantList: [],
                        queryResult: respJson.response.groups[0].items
                    }, this.generateTableData)
                })
        );
    };

    generateTableData = () => {
        const { queryResult } = this.state;
        const locationArr = [];

        queryResult.forEach((item, key) => {
            const tempObj = {};
            tempObj.id = item.venue.id;
            tempObj.name = item.venue.name;
            tempObj.category = item.venue.categories[0].name;
            tempObj.url = item.venue.url;
            tempObj.rating = item.venue.rating;
            tempObj.ratingColor = item.venue.ratingColor;

            locationArr.push(tempObj);
        });

        this.setState({
            isLoading: false,
            tableData: locationArr
        });
    };

    addNewParticipant = () => {
        const { tableData, participantList } = this.state;
        const newName = this.refs['newParticipant'].value;

        if(newName === '') return;

        const newData = {};
        newData.name = newName;

        tableData.forEach((item, key) => {
            const selector = this.refs['new' + key];
            if(selector.checked) {
                newData.selected = key
            }
        });

        const newList = [...participantList, newData];
        this.setState({
            participantList: newList
        }, this.clearNewParticipant);
    };

    clearNewParticipant = () => {
        this.refs['newParticipant'].value = '';

        const { tableData } = this.state;
        tableData.forEach((item, key) => {
            const selector = this.refs['new' + key];
            selector.checked = false;
        });
    };

    searchLunchPlace = () => {
        const searchKey = this.refs['searchKey'].value;

        this.setState({
            searchQuery: searchKey
        }, this.startSearch)
    };

    startSearch = () => {
        const { searchQuery } = this.state;

        this.fetchFQData(searchQuery);
    };

    render() {
        const { tableData, participantList, isLoading } = this.state;

        return (
            <HomeWrapper>
                <div className="query-panel">
                    <input type="text" ref="searchKey" placeholder="Search Place" />
                    <button onClick={this.searchLunchPlace}>Search</button>
                </div>

                <div className="result-area">
                    { isLoading ? (
                        <div className="loader">Loading...</div>
                    ) : (
                        <table className="result-table">
                            <thead>
                                <tr>
                                    <th>Participants</th>
                                    { tableData.map((item, key) => {
                                        return (<th key={key}>
                                            {!!item.url
                                                ? <a href="{item.url}" className="link-title" target="_blank">{item.name}</a>
                                                : <span className="link-title">{item.name}</span>}
                                            <div className="category">{item.category}</div>
                                            {!!item.rating && <div className="rating">{item.rating}</div>}
                                        </th>)
                                    })}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { participantList.map((item0, key0) => {
                                    return (
                                        <tr key={key0}>
                                            <td><input type="text" id={`participantName_${key0}`} value={item0.name} disabled /></td>
                                            { tableData.map((item1, key1) => {
                                                return (<td key={key1}>
                                                    <div className="selector">
                                                        <input
                                                            type="radio"
                                                            id={item1.id + '_0'}
                                                            name={'set_' + key0}
                                                            value={key1}
                                                            checked={+item0.selected === +key1}
                                                            onChange={() => null}
                                                        />
                                                        <label htmlFor={item1.id + '_0'} />
                                                    </div>
                                                </td>)
                                            })}
                                            <td />
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td><input type="text" id="participantName_new" ref="newParticipant" placeholder="Add New" /></td>
                                    { tableData.map((item, key) => {
                                        return (<td key={key}>
                                            <div className="selector">
                                                <input
                                                    type="radio"
                                                    id={'new' + key}
                                                    name={'newSet'}
                                                    value={key}
                                                    ref={'new' + key}
                                                />
                                                <label htmlFor={'new' + key} />
                                            </div>
                                        </td>)
                                    })}
                                    <td><button onClick={this.addNewParticipant}>Add New</button></td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="note">
                    Note: For some reason, my Foursquare API call doesn't return me the URL + rating value for the result.<br />
                    If you would like to see the URL + rating layout, feel free to change the result response to use mock value (taken from Foursquare API page) in line 54. Otherwise, I believe everything else is working properly.
                </div>
            </HomeWrapper>
        );
    }
}


export default withWrapper(Home);


const HomeWrapper = styled.div`
    & .query-panel {
        display: flex;
        height: ${headerHeight}px;
        justify-content: space-between;
        margin-bottom: ${headerHeight / 2}px;
        
        & input {
            margin-right: ${commonGap}px;
            border-radius: ${borderRadius}px;
        }
        
        & button {
            border-radius: ${borderRadius}px;
        }   
    }
    
    & .result-area {
        & .loader {
            padding: ${commonGap}px; 
            text-align: center;        
        }
    }

    & .result-table {
        width: 100%;
        border: 0;
        border-collapse: collapse;
        
        & th,
        & td {
            padding: ${commonGap}px; 
            border-bottom: 1px solid ${colorGray};
        }
        
        & th {
            background-color: ${colorGray};
            
            & .link-title {
                color: ${colorBlue};                
            }
            
            & .category {  
                font-size: 0.9em;
                color: ${colorDarkGray};
                font-weight: normal;
            }
            
            & .rating {  
                margin-top: ${commonGap / 2}px;
                padding: ${commonGap / 2}px;
                border-radius: ${borderRadius / 2}px;
                background-color: ${colorBlue};
                color: ${colorWhite};
                font-size: 0.9em;
            }
        }
        
        & tr:nth-child(odd) {
            & > td {
                background-color: ${colorLightGray};
            }
        }
        
        & .selector {
            text-align: center;
            
            & input[type="radio"] {
                display: none;
                
                &:checked ~ label { 
                    background: ${colorBlue};
                    border: 1px solid ${colorGray};
                }
            }
    
            & > label {
                display: inline-block;
                height: ${commonGap * 2}px;
                width: ${commonGap * 2}px;
                background: #fff;
                border-radius: 50%;
                border: 1px solid ${colorGray};
            }
        }
    }
    
    & .note {
        font-size: 0.9em;
        padding: ${commonGap}px 0;
        color: 1px solid ${colorDarkGray};
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
