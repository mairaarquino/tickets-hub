const prisma = require('../config/prisma')
const { convertToISO } = require('../utils/date')

async function addEvent (title, desc, date, published) {
  try {
    const create = await prisma.event.create({
      data: {
        title, desc, date: convertToISO(date), published
      }
    })

    console.log(create);
    
  } catch (error) {
    console.log(error);
    
  }
}

async function getEvent () {
  try {
    return prisma.event.findMany()
  } catch (error) {
    console.log(error);
    
  }
}

async function getEventById(id) {
  try {
    return prisma.event.findUnique({
      where: {
        id
      }
    })
    
  } catch (error) {
    console.log(error);
    
  }
}

module.exports = {
  addEvent, getEvent, getEventById
}
