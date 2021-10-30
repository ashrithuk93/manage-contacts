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
          home: req.body.address.home,
          work: req.body.address.work,
          other: req.body.address.other,
        },
        phone: {
          home: req.body.phone.home,
          work: req.body.phone.work,
          mobile: req.body.phone.mobile,
          fax: req.body.phone.fax,
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
          home: req.body.address.home,
          work: req.body.address.work,
          other: req.body.address.other,
        },
        phone: {
          home: req.body.phone.home,
          work: req.body.phone.work,
          mobile: req.body.phone.mobile,
          fax: req.body.phone.fax,
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
