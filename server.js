const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    // Express will serve up index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res ) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});