import { RECEIVE_API_DATA } from "../actions/actions";

export default (state = {}, { type, data }) => {
  // console.log('data', JSON.stringify(data))
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};