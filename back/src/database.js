const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://dbMin:min123456@cluster-min.ze1d9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true
    })
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));   
    


