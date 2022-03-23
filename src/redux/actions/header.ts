/* export const setHeaderTop = (links) => ({
  type: "SET_HEADER_TOP",
  payload: links,
});
/* export const setHeaderBottom = (links) => ({
  type: "SET_HEADER_BOTTOM",
  payload: links,
});
 */

/* export const setHeader = (links: any[]) => ({
  type: "SET_HEADER",
  payload: links,
});
 */

/* interface HeaderObject {
  headerTop: any[];
  headerBottom: any[];
} */

export const setHeader = (links: any) => ({
  type: "SET_HEADER",
  payload: links,
});
