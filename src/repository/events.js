const prisma = require('../config/prisma')
const { convertToISO } = require('../utils/date')

async function addEvent (title, desc, date, published) {
  try {
    return prisma.event.create({
      data: {
        title, desc, date: convertToISO(date), published
      }
    })
  } catch (error) {
    console.log(error)
  }
}

async function getEvents () {
  try {
    return prisma.event.findMany()
  } catch (error) {
    console.log(error)
  }
}

async function getEventById (id) {
  try {
    return prisma.event.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addEvent, getEvents, getEventById
}
