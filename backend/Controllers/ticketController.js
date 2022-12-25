const asyncHandler = require("express-async-handler");
const TicketModel = require("../Models/ticketModel");
const UserModel = require("../Models/userModel");

exports.getTickets = asyncHandler(async (req, res) => {
  const tickets = await TicketModel.find({ user: req.user._id });
  res.json(tickets);
});

exports.getTicketById = asyncHandler(async (req, res) => {
  const ticket = await TicketModel.findById(req.params.id);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});

exports.deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await TicketModel.findById(req.params.id);
  if (ticket) {
    await ticket.remove();
    res.json({ message: "Ticket removed" });
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});

exports.createTicket = asyncHandler(async (req, res) => {
  const ticket = new TicketModel({
    user: req.user._id,
    product: "Iphone",
    description: "Test",
    status: "New",
    priority: "Low",
  });
  const createdTicket = await ticket.save();
  res.status(201).json(createdTicket);
});

exports.updateTicket = asyncHandler(async (req, res) => {
  const { product, description, status, priority } = req.body;
  const ticket = await TicketModel.findById(req.params.id);
  if (ticket) {
    ticket.product = product;
    ticket.description = description;
    ticket.status = status;
    ticket.priority = priority;
    const updatedTicket = await ticket.save();
    res.json(updatedTicket);
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});
