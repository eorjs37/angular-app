import { createAction, props } from '@ngrx/store';
import { File } from './file';
import { HttpEvent } from '@angular/common/http';

export enum ActionTypes{
    LOAD_FILE_REQUEST = '[File] Load File Request',
    LOAD_FILE_FAIL = '[File] Load File FAIL',
    LOAD_FILE_SUCCESS = '[File] Load File SUCCESS',

    BEFORE_ADD_FILE='[File] Before Add File',
    ADD_FILE = '[File] Add File',
    ADD_FILE_SUCCESS = '[File] Add File Success',

    BEFORE_SEND_FILE ='[Array File] Before Send File'
}

export const loadFileRequestAction = createAction(
    ActionTypes.LOAD_FILE_REQUEST,
    props<{ fileList: File[]}>()
)

export const loadFileSuccessAction = createAction(
    ActionTypes.LOAD_FILE_SUCCESS,
    props<{fileList: File[]}>(),
)

export const loadFileFailAction = createAction(
    ActionTypes.LOAD_FILE_FAIL,
    props<{ error: string }>()
)


export const addBeforeFileAction = createAction(
    ActionTypes.BEFORE_ADD_FILE,
    props<{ file: any}>()
)

export const addFileAction = createAction(
    ActionTypes.ADD_FILE,
    props<{ file: File}>()
)

export const addFileSuccess = createAction(
    ActionTypes.ADD_FILE_SUCCESS,
    props<{ res: HttpEvent<any>}>()
)

export const beforeSendArrayFile = createAction(
    ActionTypes.BEFORE_SEND_FILE,
)