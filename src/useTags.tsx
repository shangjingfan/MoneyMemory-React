import {useEffect, useRef, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpadate} from './hooks/useUpdate';

type Tag = {
  id: number;
  name: string
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if(localTags.length === 0){
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTags);
  }, []);

  useUpadate(()=>{
    console.log(tags);
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags])

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
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag,
    addTag
  };
};

export {useTags};