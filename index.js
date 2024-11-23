const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 8000

const app = express();
const path = require('path');
var compression = require('compression');
app.use(compression());
const helmet = require('helmet');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://apisegura.com", "https://vercel.live", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:", "wss:", "ws:"],
      reportUri: ["/csp-violation-report-endpoint"],
    }
  })
);

app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
});


app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port} ${process.env.BASE_URL}`))


