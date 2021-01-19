import React, { Component } from 'react';


class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
            <button onClick={this.handleGoBack}>뒤로</button>
            <button onClick={this.handleGoHome}>홈으로</button>
            </div>
    );
    }
}


export default HistorySample;