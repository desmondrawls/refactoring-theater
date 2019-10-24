import { comedy } from './comedy';
import { tragedy } from './tragedy';

export const playFactory = ({name, type}: {name: string, type: string}) => {
  console.log('here', type)
  console.log('name', name)
  if(type === 'comedy') {
    return comedy(name)
  } else if (type === 'tragedy') {
    return tragedy(name)
  } else {
    throw new Error(`unknown type ${type}`)
  }
}