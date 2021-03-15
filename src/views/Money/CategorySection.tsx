import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
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
const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap;
  const categoryList: Keys[] = ['+', '-'];
  // const [categoryList] = useState<('-' | '+')[]>(['+', '-']);
  const [category, setCategory] = useState('+');
  return (
    <Wrapper>
      <ul>
        {categoryList.map(t => {
            return (<li className={category === t ? 'selected' : ''}
                onClick={() => setCategory(t)}
                key={t}
            >{categoryMap[t]}</li>);
          }
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};