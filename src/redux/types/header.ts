export interface HeaderObject {
  headerTop: any[];
  headerBottom: any[];
}

export interface HeaderState {
  /* header: any[]; */
  header: HeaderObject;
  /* headerTop: any[];
  headerBottom: any[]; */
}

export interface setHeaderAction {
  type: string;
  payload: any[];
  /* payload: any[]; */
}
