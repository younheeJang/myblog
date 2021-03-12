export const SET_EDITOR_DATA = 'SET_EDITOR_DATA'

export const setEditorData = (editordata) => {
    return {
      type: SET_EDITOR_DATA,
      editorData : editordata
    }
}