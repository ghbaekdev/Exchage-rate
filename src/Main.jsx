import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExchangeCalculator from './components/ExchangeCalculator';
import { data } from './EXCHANGE_DATA';

const selectList = [
  { title: '한국(KRW)', name: 'USDKRW' },
  { title: '일본(JPY)', name: 'USDJPY' },
  { title: '필리핀(PHP)', name: 'USDPHP' },
];

const Main = () => {
  const [exchage, setExchage] = useState(data);
  const [selected, setSelected] = useState();
  const [inputValue, setInputValue] = useState();
  const [calculate, setCalculate] = useState();

  const myHeaders = new Headers();
  myHeaders.append('apikey', 'co8x4Nvo7M1aK8kyI8WuijuiA47JcOxb');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  let date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '-' + month + '-' + day;
  const start_date = dateStr;
  const end_date = dateStr;

  // useEffect(() => {
  //   fetch(
  //     `https://api.apilayer.com/currency_data/change?start_date=${start_date}&end_date=${end_date}`,
  //     requestOptions
  //   )
  //     // fetch(`/data/EXCHANGE_DATA.json`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setExchage(result);
  //     })
  //     .catch((error) => console.log('error', error));
  // }, []);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  let quote = exchage.quotes;

  let rate = quote.USDKRW;

  let unit = 'KRW/USD';

  let totalUnit = 'KRW';

  if (selected === 'USDKRW') {
    rate = quote.USDKRW;
    unit = 'KRW/USD';
    totalUnit = 'KRW';
  } else if (selected === 'USDJPY') {
    rate = quote.USDJPY;
    unit = 'JPY/USD';
    totalUnit = 'JPY';
  } else if (selected === 'USDPHP') {
    rate = quote.USDPHP;
    unit = 'PHP/USD';
    totalUnit = 'PHP';
  }

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleRate = () => {
    if ((inputValue < 0) | (inputValue >= 10000)) {
      alert('송금액이 바르지 않습니다');
    } else {
      setCalculate(rate * inputValue);
    }
  };

  return (
    <ExchageWrap>
      <ExchageForm>
        <h1>환율계산</h1>
        <div>송금국가: 미국(USD)</div>
        수취국가:
        <select onChange={handleSelect} value={selected}>
          {selectList.map(({ title, name }) => {
            return (
              <option value={name} key={name}>
                {title}
              </option>
            );
          })}
        </select>
        <div>
          환율: {rate.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          {`  ${unit}`}
        </div>
        <div>
          송금액: <input onChange={handleInput} type="number" /> USD
        </div>
        <button onClick={handleRate}>Submit</button>
        {calculate > 0 && (
          <div>
            수취금액은
            {calculate.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            {`  ${totalUnit}`}
            입니다.
          </div>
        )}
      </ExchageForm>
      <ExchangeCalculator />
    </ExchageWrap>
  );
};

export default Main;

const ExchageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ExchageForm = styled.div`
  width: 500px;
  height: 500px;
`;
