export const setFooter = (links: any[]) => ({
  type: "SET_FOOTER",
  payload: links,
});
export const setFooterCopyright = (copyright: any[]) => ({
  type: "SET_FOOTER_COPYRIGHT",
  payload: copyright,
});
