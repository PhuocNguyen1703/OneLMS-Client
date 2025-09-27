export type TableStatus =
  | "available"
  | "reserved"
  | "occupied"
  | "cleaning"
  | "locked";

export type DialogType =
  | "edit"
  | "reservation"
  | "occupied"
  | "cleaning"
  | "new-order"
  | null;

export type Option = {
  key: string | number;
  label: string;
};
