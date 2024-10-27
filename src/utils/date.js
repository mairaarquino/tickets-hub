function convertToISO (dateStr) {
  const [day, month, year] = dateStr.split('/')
  return new Date(`${year}-${month}-${day}`).toISOString()
}

module.exports = {
  convertToISO
}
