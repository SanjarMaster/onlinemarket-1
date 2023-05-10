const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

var fs = require('fs');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const port = process.env.PORT || 5100

app.use(bodyParser.json({ limit: '200mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
app.use(express.json());
app.use(cors());


// file Upload qilamiz
app.post('/onlinemarket/file_upload', upload.single('photo'), function (req, res, next) {
    const file = req.file;
    const fileArray = file.originalname.split(".");
    var type = fileArray[fileArray.length - 1];
    var file_name = file.filename + "." + type;
    fs.rename(file.path, 'Images/' + file_name, function (err) {
        if (err) throw err;
        console.log('renamed complete');
    });
    res.end(file_name);
});

// papkadan file lani o`qimiz
app.post('/onlinemarket/file_list', upload.single('photo'),function (req, res, next) {
    const { readdir } = require('fs').promises;
    const getFileList = async (dirName) => {
        const files = await readdir(dirName);
        console.log("files: ",files);
        return files;
    };
    getFileList('Images').then((files) => {
        res.json(files).end();
    });
    
});



const routes = require('./settings/routes')
routes(app)

app.listen(port, () => {
    console.log(`Server run ${port}`);
})

