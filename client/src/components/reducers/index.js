import { combineReducers } from "redux";
import contacts from "./contacts";
import alert from "./alert";

export default combineReducers({ contacts, alert });
