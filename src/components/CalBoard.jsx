import React from 'react';
import styled from 'styled-components';

const CalBoard = ({ selectList, handleCountry, money }) => {
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

      <div>기준일:{startDate}</div>
      <div>
        {money.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </div>
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
