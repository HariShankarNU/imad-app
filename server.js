var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article1={
    title:'article1',
    heading:'article1',
    date:'aug4',
    content: `  <p>
            this is the first article..hooiogwrggsdodijvah...
        </p>
        <p>
            the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question.the real content begind here are yiu reagy coz i am are yoi=u that is the question
        </p>`
}
function createtemplate(data){
  var  title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
    

var htmltemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        

    </head>
    <body>
      <div>
          <a href="/">home</a>
      </div>
      <hr/>
      <h1>
          ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div class="container">
    ${content}
        </div>
    </body>
</html>
`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article1', function (req, res) {
   res.send(createtemplate(article1));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
   res.send(counter.toString());
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
