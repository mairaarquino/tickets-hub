const eventRepository = require('../repository/events')

async function addEvent (req, res, next) {
  const { title, desc, date, published } = req.body
  const event = await eventRepository.addEvent(title, desc, date, published)
  res.json(event)
}

async function getEvents (req, res, next) {
  const events = await eventRepository.getEvents()
  res.json(events)
}

async function getEventById (req, res, next) {
  const { id } = req.params
  const event = await eventRepository.getEventById(id)
  res.json(event)
}

module.exports = {
  addEvent,
  getEvents,
  getEventById
}
