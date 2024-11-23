const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 8000

const app = express();
const path = require('path');
var compression = require('compression');
app.use(compression());
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://vercel.live", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "https://vercel.live", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:", "wss:", "ws:"],
      fontSrc: ["'self'", "https:", "data:"],
      frameSrc: ["'self'", "https://vercel.live"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportOnly: false,
  }
}));

app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https://apisegura.com");
  next();
});

app.use(require('./api/routes/crud'));



const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
});


app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port} ${process.env.BASE_URL}`))

