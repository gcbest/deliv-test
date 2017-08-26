const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

// require('./routes/authRoutes');

if (process.env.NODE_ENV === 'production') {
    // Make sure Express will serve production assets like main.js or main.css
    // if it doesn't find the route in the defined routes above
    app.use(express.static('client/build'));

    // Express will serve up index.html if it doesn't recognize the route
    const path = require('path');
    // this is the last resort here if the route cannot be found above
    app.get('*', (req, res ) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});