const express = require("express");
const router = express.Router();

const {
    assistantResponse,
    getDialogList,
    getDialogData
} = require("../controllers/dialog.controller");

router.get("/assistantResponse", assistantResponse);
router.get("/getDialogList", getDialogList);
router.get("/getDialogData", getDialogData);

module.exports = router;