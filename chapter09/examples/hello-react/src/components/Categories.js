import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        sidoName: '전국',
    },
    {
        sidoName: '서울',
    },
    {
        sidoName: '부산',
    },
    {
        sidoName: '대구',
    },
    {
        sidoName: '인천',
    },
    {
        sidoName: '광주',
    },
    {
        sidoName: '대전',
    },
    {
        sidoName: '울산',
    },
    {
        sidoName: '경기',
    },
    {
        sidoName: '강원',
    },
    {
        sidoName: '충북',
    },
    {
        sidoName: '충남',
    },
    {
        sidoName: '전북',
    },{
        sidoName: '전남',
    },
    {
        sidoName: '경북',
    },
    {
        sidoName: '경남',
    },
    {
        sidoName: '제주',
    },
    {
        sidoName: '세종',
    },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.sidoName}
                    activeClassName="active"
                    exact={c.sidoName === 'all'}
                    to={`/${c.name}`}
                >
                    {c.sidoName}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;