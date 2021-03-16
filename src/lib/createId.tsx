let id = parseInt(window.localStorage.getItem('idMax') || '0');
const createId = (): number => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id));
  console.log('id变为', id);
  return id;
};
export {createId};