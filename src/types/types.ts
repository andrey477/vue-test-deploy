export interface VForm extends HTMLFormElement {
  validate(): boolean;
}

export interface Link {
  title: string;
  url: string;
  exact?: boolean;
}

export interface DropDownItem {
  title: string;
  slot?: string;
  link: string;
}
