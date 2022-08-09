import React from 'react';

const name = [
  {
    name: 'USD',
    id: 1,
  },
  {
    name: 'KRW',
    id: 2,
  },
  {
    name: 'JPY',
    id: 3,
  },
  {
    name: 'CNY',
    id: 4,
  },
  {
    name: 'HKD',
    id: 5,
  },
  {
    name: 'CAD',
    id: 6,
  },
];

const CalBoard = ({ selectList }) => {
  const date = new Date();

  const years = date.getFullYear();
  const month = date.toLocaleDateString('en-us', { month: 'short' });
  const days = date.getDate();
  const startDate = years + '-' + month + '-' + days;

  return <div>기준일:{startDate}</div>;
};

export default CalBoard;
