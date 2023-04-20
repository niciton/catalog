import transliter from '@/module/transliter.js';

export default function(path, id, name){
  return `/${path}/${id}/${transliter(name)}`
}