const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

// extracts cookie data
// app.use(
//     cookieSession({
//         // 30 days
//         maxAge: 30 * 24 * 60 * 60 * 1000,  // has to be passed in milliseconds
//         keys: [keys.cookieKey]
//     })
// );

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});