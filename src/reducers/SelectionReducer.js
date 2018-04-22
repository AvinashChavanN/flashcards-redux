export default (state = null,action) => {

  switch(action.tyle){
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
