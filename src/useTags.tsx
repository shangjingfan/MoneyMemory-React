import {useState} from 'react';
import {createId} from 'lib/createId';
type Tag = {
  id: number;
  name: string
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
  ]);
  return {
    tags,
    setTags
  }
};

export {useTags};