import {SET_EDITOR_DATA} from '../actions/editorDataAction'

const initialState = {
    editorData: {}
  };

const editorDataReducer = (state = initialState, action) => {

  switch (action.type) {
      
    case SET_EDITOR_DATA:
      return { ...state, editorData: action.editorData};

    default:
      return state;
  }
};

export default editorDataReducer;