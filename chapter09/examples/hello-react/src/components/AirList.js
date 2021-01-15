import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AirItem from './AirItem';
import axios from 'axios';


const AirListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


/*
const sampleArticle = {
    "so2Grade": "1",
    "coFlag": null,
    "khaiValue": "160",
    "so2Value": "0.008",
    "coValue": "0.4",
    "pm10Flag": null,
    "o3Grade": "2",
    "pm10Value": "87",
    "khaiGrade": "3",
    "sidoName": "경남",
    "no2Flag": null,
    "no2Grade": "1",
    "o3Flag": null,
    "so2Flag": null,
    "dataTime": "2021-01-15 14:00",
    "coGrade": "1",
    "no2Value": "0.027",
    "stationName": "진영읍",
    "pm10Grade": "3",
    "o3Value": "0.040"
};
*/

const AirList = () => {

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

        useEffect(() => {
            // async를 사용하는 함수 따로 선언
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(
                    'http://3.35.219.122:3000/api?sidoName=경남',
                        );
                    setArticles(response.data.response.body.items);
                    //console.log(response.data.response.body.items)
                } catch (e) {
                    console.log(e);
                }
                setLoading(false);
            };
            fetchData();
        }, []);

        // 대기 중일 때
        if (loading) {
            return <AirListBlock>대기 중…</AirListBlock>;
        }
        // 아직 articles 값이 설정되지 않았을 때
        if (!articles) {
            return null;
        }
        // articles 값이 유효할 때
        return (
            <AirListBlock>
                {articles.map(article => (
                    <AirItem key={article.stationName} article={article} />
                ))}
            </AirListBlock>
        );
};



export default AirList;