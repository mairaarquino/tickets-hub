const eventController = require('../controllers/events')

const express = require('express')

const router = express.Router()
router.post('/events', eventController.addEvent)
router.get('/events', eventController.getEvents)
router.get('/events/:id', eventController.getEventById)

router.post('/users', (req, res) => console.log('Salva usuário'))
router.get('/users', (req, res) => console.log('Lista usuário'))
router.get('/user/:id', (req, res) => console.log('Busca usuário'))

router.get('/cart', (req, res) => console.log('Busca carrinho'))
router.post('/cart', (req, res) => console.log('Adiciona (ou cria) ao carrinho'))

router.post('/payment', (req, res) => console.log('Confirma pagamento'))

router.get('/ticket', (req, res) => console.log('Lista ingressos'))

module.exports = router
