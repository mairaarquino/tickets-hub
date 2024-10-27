const prisma = require('../config/prisma')

async function addEvent (title, desc, date, published) {
  try {
    const create = await prisma.event.create({
      data: {
        title, desc, date, published
      }
    })

    console.log(create);
    
  } catch (error) {
    console.log(error);
    
  }
}

async function getEvent () {
  try {
    const event = await prisma.event.findMany();

    console.log(event);
    
  } catch (error) {
    console.log(error);
    
  }
}
module.exports = {
  addEvent, getEvent
}