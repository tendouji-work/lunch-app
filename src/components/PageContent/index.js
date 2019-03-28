import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { headerHeight } from '../../constants/appState';
import { updateData } from '../../actions';
import Wrapper from '../Wrapper';


function withRedux(WrappedComponent, pageClassName) {
    class MainWrapper extends Component {
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
            const {
                appState,
                dispatch,
                updateData,
            } = this.props;

            return (
                <PageContentWrapper className={[
                    `page-content`,
                    (pageClassName !== '' ? ' ' + pageClassName : ''),
                ].join('')}>
                    <Wrapper>
                        <WrappedComponent
                            appState={appState}
                            dispatcher={{
                                dispatch,
                                updateData,
                            }}
                        />
                    </Wrapper>
                </PageContentWrapper>
            );
        }
    }

    const mapStateToProps = (state) => {
        return ({
            appState: state.pageData,
        })
    };

    const mapDispatchToProps = (dispatch) => ({
        dispatch,
        updateData: (data) => dispatch(updateData(data)),
    });

    return connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
};

export default withRedux;



const PageContentWrapper = styled.div`
    padding-top: calc(${headerHeight}px + 1rem);
`;
