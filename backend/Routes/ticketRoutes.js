const express = require("express");
const router = express.Router();
const protect = require("../Middleware/authMiddleware");
const admin = require("../Middleware/adminMiddleware");
const {
  getTickets,
  getTicketById,
  deleteTicket,
  createTicket,
  updateTicket,
} = require("../Controllers/ticketController");

router.route("/").get(protect, getTickets).post(protect, createTicket);
router
  .route("/:id")
  .get(protect, getTicketById)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
