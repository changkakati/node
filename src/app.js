const express = require("express")


const app = express()

// Global middleware
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message:'API is running'
    })
})

module.exports = app