import Layout from '../components/Layout';
import React, { useState } from 'react';
import { CategorySection } from './Money/CategorySection';
import styled from 'styled-components';
import { useRecords } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
const CategoryWrapper = styled.div`
  background: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags();
  const selectedRecords = records.filter(r => r.category === category )
  
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={category => setCategory(category)}
        />
      </CategoryWrapper>

      <div>
        {selectedRecords.map(r => {
          return (<Item>
            <div className='tags'>
              {r.tagIds.map(id => <span>{getName(id)}</span>)}

            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">
              ￥{r.amount}
            </div>
          </Item>)
        })}
      </div>
    </Layout>
  );
}
export default Statistics;