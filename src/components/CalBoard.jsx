import React from 'react';
import styled from 'styled-components';

const CalBoard = ({ selectList, handleCountry, money, board }) => {
  const date = new Date();

  const years = date.getFullYear();
  const month = date.toLocaleDateString('en-us', { month: 'short' });
  const days = date.getDate();
  const startDate = years + '-' + month + '-' + days;

  return (
    <>
      <BoardHeader>
        {selectList.map((item) => {
          return (
            <BoardList key={item} onClick={() => handleCountry(item)}>
              <ListSpan>{item}</ListSpan>
            </BoardList>
          );
        })}
      </BoardHeader>
      <BoardWrap>
        <BoardMoney>
          {board && <span>{board}</span>}
          {money && <span>{money.toFixed(2)}</span>}
        </BoardMoney>
        <BoardDate>기준일:{startDate}</BoardDate>
      </BoardWrap>
    </>
  );
};

export default CalBoard;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BoardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  width: 100%;
  height: 30px;
`;

const ListSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BoardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
`;

const BoardDate = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const BoardMoney = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 600;
  width: 150px;
`;
