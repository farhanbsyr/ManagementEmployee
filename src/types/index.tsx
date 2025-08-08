export interface employeeType {
  id: number;
  name: string;
  gender: string;
  position: string;
  branch: string;
  status: string;
  awalKontrak: string;
  akhirKontrak: string;
  statusDateEmployee: string;
}

export interface typesFilter {
  branchs: branchTypes[];
  genders: string[];
  positions: positionTypes[];
  status: string[];
}

export interface branchTypes {
  id: string;
  branchName: string;
  address: string;
}

export interface positionTypes {
  id: string;
  branchName: string;
  address: string;
}

export interface positionTypes {
  id: string;
  positionName: string;
}
