import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex; flex-direction: column;
`;
type Category = '+' | '-';

const Money: React.FC = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const onChange = (obj: Partial< typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
    <MyLayout className="xxx">
      {selected.tagIds}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={()=>{}}
      />
    </MyLayout>
  );
};
export default Money;