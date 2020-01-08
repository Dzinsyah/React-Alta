import createStore from "unistore";

const initialState = {
  api_key: "",
  email: "",
  password: "",
  full_name: "",
  username: "",
  is_login: false,
  inputPage1: "",
  inputComponent1: "",
  number: "",
  stateToChangeFromPage: "belum berubah"
};

export const store = createStore(initialState);

export const actions = store => ({
  handleInputChange: (state, event) => {
    return { [event.target.name]: event.target.value };
  },

  handleInputChange2: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
  }
});
