import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

// Get the current location.
// const location = history.location;

const initialState = {
  api_key: "",
  email: "",
  password: "",
  full_name: "",
  username: "",
  is_login: false
};

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

export const actions = store => ({
  // Actions can just return a state update:
  setField: (state, event) => {
    return { [event.target.name]: event.target.value };
  },

  async doSignup(state) {
    let result = await axios
      .get("http://localhost:3030")
      .then(function (response) {
        // handle success
        console.log(response.data);
        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("doSignup result", result);
    return { is_login: true };
  },

  async doLogout(state) {
    let result = await axios
      .get("http://localhost:3030")
      .then(function (response) {
        // handle success
        console.log("doLogout res", response.data);
        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("doLogout result", result);
    if (result) {
      // history.push("/");
      return { is_login: false };
    }
  },

  async doLogin(state) {
    let result = await axios
      .get("http://localhost:3030")
      .then(function (response) {
        // handle success
        console.log(response.data);
        history.push("/");
        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("doLogin result", result);
    return { is_login: result };
  },

  doLogout: state => {
    localStorage.clear();

    return { is_login: false };
  },
  postLogin: async state => {
    const data = {
      username: state.username,
      password: state.password
    };
    await axios
      .post("https://react-alta.free.beeceptor.com/auth", data)
      .then(response => {
        console.log(response.data);
        if (response.data.hasOwnProperty("api_key")) {
          localStorage.setItem("api_key", response.data.api_key);
          localStorage.setItem("is_login", true);
          localStorage.setItem("full_name", response.data.full_name);
          localStorage.setItem("email", response.data.email);
          store.setState({ is_login: true });
          history.push("/profile");
        }
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        console.log("always call");
      });
  }
});
