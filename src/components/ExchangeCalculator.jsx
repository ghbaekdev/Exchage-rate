import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CalBoard from './CalBoard';

const ExchangeCalculator = ({ exchange }) => {
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState('KRW');
  const [money, setMoney] = useState();

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const selectList = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  useEffect(() => {
    // const selectedEx = exchange.filter(
    //   (country) => country.quotes === `USD${selected}`
    // );
    // console.log(selectedEx);
  });

  const handleCountry = (item) => {
    const inValue = parseInt(inputValue.split(',').join(''));
    if (selected === 'USD') {
      setMoney(inValue * exchange.quotes[`USD${item}`]);
    } else if (item === 'USD') {
      setMoney(inValue * (1 / exchange.quotes[`USD${selected}`]));
    } else {
      setMoney(
        inValue /
          (exchange.quotes[`USD${selected}`] / exchange.quotes[`USD${item}`])
      );
    }
    console.log(
      exchange.quotes[`USD${selected}`],
      exchange.quotes[`USD${item}`]
    );
  };
  console.log('main ', money);
  return (
    <CalculatorWrap>
      <Headers>
        <CalculatorInput
          type="text"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          onChange={handleInput}
          value={inputValue}
        />
        <SelectBox onChange={handleSelect} value={selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </SelectBox>
      </Headers>
      <CalculatorBoard>
        <CalBoard
          selectList={selectList.filter((item) => item !== selected)}
          handleCountry={handleCountry}
          money={money}
        />
      </CalculatorBoard>
    </CalculatorWrap>
  );
};

export default ExchangeCalculator;

const CalculatorWrap = styled.div`
  width: 400px;
  height: 500px;
  border: 1.5px solid black;
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
`;
