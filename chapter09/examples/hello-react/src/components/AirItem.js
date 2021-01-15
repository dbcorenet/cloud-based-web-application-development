import React from 'react';
import styled from 'styled-components';


const AirItemBlock = styled.div`
  display: flex;



.thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const AirItem = ({ article }) => {
    const {  stationName, dataTime, o3Value, pm10Value } = article;
    return (
        <AirItemBlock>
            <div className="contents">
            <h2>
                {stationName}
            </h2>
                <p>측정일 : {dataTime}</p>
                <p>오존 농도 : {o3Value}</p>
                <p>미세먼지(PM10)농도 : {pm10Value}</p>
        </div>
        </AirItemBlock>
);
};


export default AirItem;