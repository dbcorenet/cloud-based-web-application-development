import React from 'react';
import Categories from './Categories';
import AirList from './AirList';

const AirPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 전국으로 사용
    const category = match.params.category || '전국';

    return (
        <>
            <Categories />
            <AirList category={category} />
        </>
    );
};

export default AirPage;