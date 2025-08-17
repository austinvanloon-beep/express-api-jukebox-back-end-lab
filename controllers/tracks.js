
const express = require('express')
const router = express.Router()
const Track = require('../models/Track')




// make
router.post('/', async (req, res) => {
  try {
    const track = await Track.create(req.body)
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})



router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find({})
    res.status(200).json(tracks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})



router.get('/:id', async (req, res) => {
  try {
    const track = await Track.findById(req.params.id)
    res.status(200).json(track)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// update
router.put('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// deletes,
router.delete('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id)
    res.status(200).json(track)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
