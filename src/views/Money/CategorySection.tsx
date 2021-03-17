import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        height: 3px;
        background: #333;
        left: 0;
        bottom: 0;
      }
    }  
  }
`;
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' };
  type Keys = keyof typeof categoryMap;
  const categoryList: Keys[] = ['+', '-'];
  const category = props.value;
  return (

    <Wrapper>
      <ul>
        {categoryList.map(t => {
          return (<li className={category === t ? 'selected' : ''}
            onClick={() => props.onChange(t)}
            key={t}
          >{categoryMap[t]}</li>);
        }
        )}
      </ul>
    </Wrapper>
  );
};
export { CategorySection };