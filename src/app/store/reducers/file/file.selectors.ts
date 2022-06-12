import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FileState } from "./file.state";

const selectFileFeature = createFeatureSelector<FileState>('file')

export const getFileList = createSelector(
    selectFileFeature,
    (state:FileState) => state.fileList
)