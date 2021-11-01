const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const mongoose = require("mongoose");

const Contact = require("../../models/Contact");

// @route  POST api/contacts
// @desc   test route
// @access public
router.post(
  "/",
  [
    check("fName", "First name is required"),
    check("lName", "Last name is required"),
    check("mName", "Middle name is required"),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const newContact = new Contact({
        fName: req.body.fName,
        lName: req.body.lName,
        mName: req.body.mName,
        address: {
          home: {
            s_name: req.body.address.home.s_name,
            s_number: req.body.address.home.s_number,
            a_number: req.body.address.home.a_number,
            city: req.body.address.home.city,
            p_code: req.body.address.home.p_code,
            country: req.body.address.home.country,
          },
          work: {
            s_name: req.body.address.work.s_name,
            s_number: req.body.address.work.s_number,
            a_number: req.body.address.work.a_number,
            city: req.body.address.work.city,
            p_code: req.body.address.work.p_code,
            country: req.body.address.work.country,
          },
          other: {
            s_name: req.body.address.other.s_name,
            s_number: req.body.address.other.s_number,
            a_number: req.body.address.other.a_number,
            city: req.body.address.other.city,
            p_code: req.body.address.other.p_code,
            country: req.body.address.other.country,
          },
        },
        phone: {
          home: {
            c_code: req.body.phone.home.c_code,
            number: req.body.phone.home.number,
            a_code: req.body.phone.home.a_code,
          },
          work: {
            c_code: req.body.phone.work.c_code,
            number: req.body.phone.work.number,
            a_code: req.body.phone.work.a_code,
          },
          mobile: {
            c_code: req.body.phone.mobile.c_code,
            number: req.body.phone.mobile.number,
            a_code: req.body.phone.mobile.a_code,
          },
          fax: {
            c_code: req.body.phone.fax.c_code,
            number: req.body.phone.fax.number,
            a_code: req.body.phone.fax.a_code,
          },
        },
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  POST api/contacts/:id
// @desc   Update contacts
// @access public
router.post(
  "/:id",
  [
    check("fName", "First name is required"),
    check("lName", "Last name is required"),
    check("mName", "Middle name is required"),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const newContact = {
        fName: req.body.fName,
        lName: req.body.lName,
        mName: req.body.mName,
        address: {
          home: {
            s_name: req.body.address.home.s_name,
            s_number: req.body.address.home.s_number,
            a_number: req.body.address.home.a_number,
            city: req.body.address.home.city,
            p_code: req.body.address.home.p_code,
            country: req.body.address.home.country,
          },
          work: {
            s_name: req.body.address.work.s_name,
            s_number: req.body.address.work.s_number,
            a_number: req.body.address.work.a_number,
            city: req.body.address.work.city,
            p_code: req.body.address.work.p_code,
            country: req.body.address.work.country,
          },
          other: {
            s_name: req.body.address.other.s_name,
            s_number: req.body.address.other.s_number,
            a_number: req.body.address.other.a_number,
            city: req.body.address.other.city,
            p_code: req.body.address.other.p_code,
            country: req.body.address.other.country,
          },
        },
        phone: {
          home: {
            c_code: req.body.phone.home.c_code,
            number: req.body.phone.home.number,
            a_code: req.body.phone.home.a_code,
          },
          work: {
            c_code: req.body.phone.work.c_code,
            number: req.body.phone.work.number,
            a_code: req.body.phone.work.a_code,
          },
          mobile: {
            c_code: req.body.phone.mobile.c_code,
            number: req.body.phone.mobile.number,
            a_code: req.body.phone.mobile.a_code,
          },
          fax: {
            c_code: req.body.phone.fax.c_code,
            number: req.body.phone.fax.number,
            a_code: req.body.phone.fax.a_code,
          },
        },
      };

      let contact = await Contact.findById(req.params.id);

      if (contact) {
        contact = await Contact.findOneAndUpdate(
          { _id: req.params.id },
          { $set: newContact },
          { new: true }
        );

        return res.json(contact);
      }

      contact = await new Contact(newContact);

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/contacts
// @desc    Get all contacts
// @access  private
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/contacts/:id
// @desc    Edit contact by ID
// @access  public
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    await contact.remove();

    res.json({ msg: "contact removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Contact not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
