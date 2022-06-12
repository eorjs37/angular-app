import { createReducer, on } from '@ngrx/store';
import { FileState } from './file.state';
import * as FileActionsTypes from './file.actions';

export const initialState:FileState = {
    fileList: []
}

export const fileReducer = createReducer(
    initialState,
    on(FileActionsTypes.loadFileRequestAction,(state, { fileList })=>({
        ...state,
        fileList: fileList
    })),
    on(FileActionsTypes.addFileAction,(state,{ file }) =>{
        const copyState = Object.assign({},state);
        const copyFile = Object.assign({},file);
        if(copyState.fileList.length > 0){
            const maxIdx = Math.max(...copyState.fileList.map(item => item.id));
            copyFile.id = maxIdx+1;
        }
        else{
            copyFile.id = 1;
        }
        const copy = [...copyState.fileList,copyFile];
        copyState.fileList = copy;

        return copyState;
    })
)