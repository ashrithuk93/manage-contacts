import "./App.css";
import AddMargin from "./components/layout/AddMargin";
import ContactList from "./components/layout/ContactList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactInfo from "./components/layout/ContactInfo";
import EditForm from "./components/forms/EditForm";

function App() {
  return (
    <BrowserRouter>
      <AddMargin>
        <h1>Contacts</h1>
        <Switch>
          <Route excat path="/edit/:id" component={EditForm} />
          <Route excat path="/:id" component={ContactInfo} />
          <Route excat path="/" component={ContactList} />
        </Switch>
      </AddMargin>
    </BrowserRouter>
  );
}

export default App;
