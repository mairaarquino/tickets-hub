const eventRepository = require('../repository/events')

async function addEvent (req, res, next) {
  console.log('oi');
  
  const { title, desc, date, published } = req.body
  const response = await eventRepository.addEvent(title, desc, date, published)
  res.json(response)
}

async function getEvents (req, res, next) {
  const response = await eventRepository.getEvent()

  res.json(response)
}

function getEventById (req, res, next) {

}

module.exports = {
  addEvent,
  getEvents,
  getEventById
}