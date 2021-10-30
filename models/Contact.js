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
      s_name: {
        type: String,
      },
      s_number: {
        type: String,
      },
      a_number: {
        type: String,
      },
      city: {
        type: String,
      },
      p_code: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    work: {
      s_name: {
        type: String,
      },
      s_number: {
        type: String,
      },
      a_number: {
        type: String,
      },
      city: {
        type: String,
      },
      p_code: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    other: {
      s_name: {
        type: String,
      },
      s_number: {
        type: String,
      },
      a_number: {
        type: String,
      },
      city: {
        type: String,
      },
      p_code: {
        type: String,
      },
      country: {
        type: String,
      },
    },
  },
  phone: {
    home: {
      c_code: {
        type: String,
      },
      number: {
        type: String,
      },
      a_code: {
        type: String,
      },
    },
    work: {
      c_code: {
        type: String,
      },
      number: {
        type: String,
      },
      a_code: {
        type: String,
      },
    },
    mobile: {
      c_code: {
        type: String,
      },
      number: {
        type: String,
      },
      a_code: {
        type: String,
      },
    },
    fax: {
      c_code: {
        type: String,
      },
      number: {
        type: String,
      },
      a_code: {
        type: String,
      },
    },
  },
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
