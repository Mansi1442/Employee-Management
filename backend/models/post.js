const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name :{ type : String , required : true } ,
    email :{ type : String , required :true },
    number :{ type : String , required:true },
    birthday :{ type : Date, required:true  },
    position :{ type : String, required:true }
});
module.exports = mongoose.model('Post',postSchema);
