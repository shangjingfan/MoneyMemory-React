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
    // 1. 获取要改的tag下标
    const index = findTagIndex(id);
    // 2. 深拷贝tags，React的不可变数据原则：不要改原数据
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 3. 把tagsClone的第index个对象替换成新的对象，新对象id不变，只变name；splice改变原数组，返回值是修改的内容组成的数组
    tagsClone.splice(index, 1, {id: id, name: obj.name});

    setTags(tagsClone);
  };
  const deleteTag = (id:number) =>{
    // 1. 获取要改的tag下标
    const index = findTagIndex(id);
    // 2. 深拷贝tags，React的不可变数据原则：不要改原数据
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 3. 把tagsClone的第index个对象删除
    tagsClone.splice(index, 1, );

    setTags(tagsClone);
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag
  };
};

export {useTags};