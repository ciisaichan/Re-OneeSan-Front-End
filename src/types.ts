export interface TopBoxInfo {
    BoxMode: string
    BoxStr: string
}

export interface IllustCardArray {
    [index: number]: IllustCardInfo
}

export interface IllustCardInfo {
    illustID: string
    title: string
    artist: string
    regularImg: string
    originalImg: string
    tags: IllustTags
}

export interface IllustTags {
    [index: number]: String
}