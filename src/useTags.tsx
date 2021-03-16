import {useState} from 'react';
import {createId} from 'lib/createId';

type Tag = {
  id: number;
  name: string
}
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    // 深拷贝tags
    const tagsClone = JSON.parse(JSON.stringify(tags));
    console.log('tagsClone', tagsClone);
    // 更换第index个对象，id不变，只变name
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex
  };
};

export {useTags};