const express = require('express');
const morgan = require('morgan');
const app = require('./app');

app.listen(8000, () => console.log('Listening on PORT 8000'))