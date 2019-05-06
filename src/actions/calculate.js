import * as constants from '../constants';
export const append = data=>({type:constants.APPEND,data});
export const deleteData = ()=>({type:constants.DELETE});