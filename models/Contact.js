const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  mName: {
    type: String,
    required: true,
  },
  address: {
    home: {
      type: String,
    },
    work: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  phone: {
    home: {
      type: String,
    },
    work: {
      type: String,
    },
    mobile: {
      type: String,
    },
    fax: {
      type: String,
    },
  },
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
