export interface FooterState {
  footerLinksList: any[];
  footerCopyright: {};
}

export enum FooterActionTypes {
  SET_FOOTER = "SET_FOOTER",
  SET_FOOTER_COPYRIGHT = "SET_FOOTER_COPYRIGHT",
}

interface setFooterAction {
  type: FooterActionTypes.SET_FOOTER;
  payload: [];
}
interface setFooterCopyrightAction {
  type: FooterActionTypes.SET_FOOTER_COPYRIGHT;
  payload: {};
}

export type FooterAction = setFooterAction | setFooterCopyrightAction;
