import express from 'express';
import consign from 'consign';

const app = express();

// Routes
consign({cwd: __dirname})
.include('core/init.js')
.then('config/db.js')
.then('core/middleware.js')
.then('routes')
.then('core/boot.js')
.into(app);