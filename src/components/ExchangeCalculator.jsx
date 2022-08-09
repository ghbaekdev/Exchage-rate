import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CalBoard from './CalBoard';

const ExchangeCalculator = () => {
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState();

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const selectList = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  return (
    <CalculatorWrap>
      <Headers>
        <CalculatorInput type="number" onChange={handleInput} />
        <SelectBox onChange={handleSelect} value={selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </SelectBox>
      </Headers>
      <CalculatorBoard>
        <CalBoard selectList={selectList.filter((item) => item !== selected)} />
      </CalculatorBoard>
    </CalculatorWrap>
  );
};

export default ExchangeCalculator;

const CalculatorWrap = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
`;
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
`;

const CalculatorInput = styled.input`
  width: 150px;
  height: 40px;
`;

const SelectBox = styled.select`
  width: 150px;
  padding: 0 20px;
  font-size: 20px;
`;

const CalculatorBoard = styled.div`
  width: 100%;
  height: 350px;
  padding: 0 30px;
  border: 1px solid grey;
`;
