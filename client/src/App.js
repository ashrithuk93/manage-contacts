import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/header/Header";
import AddMargin from "./components/layout/AddMargin";
import ContactList from "./components/layout/ContactList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactInfo from "./components/layout/ContactInfo";
import EditForm from "./components/forms/EditForm";
import { Provider } from "react-redux";
import store from "./store";
import { loadContacts } from "./components/actions/contacts";
import Alert from "./components/layout/Alert";

function App() {
  useEffect(() => {
    store.dispatch(loadContacts());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Alert />
        <AddMargin>
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
