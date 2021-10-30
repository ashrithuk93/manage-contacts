import "./App.css";
import React, { useEffect } from "react";
import AddMargin from "./components/layout/AddMargin";
import ContactList from "./components/layout/ContactList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactInfo from "./components/layout/ContactInfo";
import EditForm from "./components/forms/EditForm";
import { Provider } from "react-redux";
import store from "./store";
import { loadContacts } from "./components/actions/contacts";

function App() {
  // const history = useHistory();

  useEffect(() => {
    store.dispatch(loadContacts());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AddMargin>
          <h1>
            <i className="fa fa-users" aria-hidden="true"></i> Contacts
          </h1>
          <Switch>
            <Route excat path="/edit/:id" component={EditForm} />
            <Route excat path="/:id" component={ContactInfo} />
            <Route excat path="/" component={ContactList} />
          </Switch>
        </AddMargin>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
