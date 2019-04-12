import { GetterTree, ActionTree, MutationTree } from "vuex";

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
  books: BookInterface[]
};

export interface RegistrationStateInterface {
  registraitedUsers: RegisterUserInterface[]
};

export interface LoginInterface {
  login: string
  password: string
};

export interface LoginStateInterface {
  isLogged: boolean
  loggedUser: RegisterUserInterface
};

export interface SharedModuleInterface {
  state: SharedStateInterface
  getters: GetterTree<SharedStateInterface, SharedStateInterface>
  mutations: MutationTree<SharedStateInterface>
  actions: ActionTree<SharedStateInterface, SharedStateInterface>
};

export interface RegistrationModuleInterface {
  state: RegistrationStateInterface
  getters: GetterTree<RegistrationStateInterface, RegistrationStateInterface>
  mutations: MutationTree<RegistrationStateInterface>
  actions: ActionTree<RegistrationStateInterface, RegistrationStateInterface>
};

export interface LoginModuleInterface {
  state: LoginStateInterface
  getters: GetterTree<LoginStateInterface, LoginStateInterface>
  mutations: MutationTree<LoginStateInterface>
  actions: ActionTree<LoginStateInterface, LoginStateInterface>
};