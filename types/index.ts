export interface BookInterface {
  id: string
  user: string
  category: string
  subcategory: string
  title: string
  description: string
  inserted: string
  modified: string
};

export interface TableHeaderInterface {
  name: string
};

export interface SharedStateInterface {
  books: BookInterface[]
  tableHeaders: TableHeaderInterface[]
  searchedValue: string
  propertyToSort: string
  isAsceding: boolean
  selectedBook: BookInterface
};

export interface RegisterUserInterface {
  login: string
  password: string
  email: string
  age: number
  firstname: string
  lastname: string
  role: string
};

export interface RegistrationStateInterface {
  registraitedUsers: RegisterUserInterface[]
};

export interface LoginInterface {
  login: string
  password: string
};

export interface LoginStateInterface {
  isLogged: boolean,
  loggedUser: RegisterUserInterface
};