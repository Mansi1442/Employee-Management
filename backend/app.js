const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");
const LogIn = require("./models/login");
const nodemailer = require("nodemailer");
const generator = require('generate-password');
// VLHaakzMe9wOqbbG
const app = express();

//mongodb+srv://Mansi:<password>@cluster0.rvl93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://Mansi:F63XeZjPebeeCuEl@cluster0.rvl93.mongodb.net/node-angular?retryWrites=true&w=majority
// { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect("mongodb+srv://Mansi:VLHaakzMe9wOqbbG@cluster0.jfvub.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connencted to databse");
    })
    .catch(() => {
        console.log("Connection failed");
    });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,PUT,DELETE,OPTIONS"
    );
    next();
});


///

//for POSTS         ////////        /////////       //////    //////   ///// ////

///

app.post("/api/posts", (req, res) => {
    console.log("Connected to Backend");

    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        birthday: req.body.birthday,
        position: req.body.position

    });
    post.save().then(result => {
        // console.log(result);
        res.status(201).json({
            message: 'Post added successfully',
            postId: result._id
        })
    });
});

app.put("/api/posts/:id", (req, res) => {
    console.log("$$$$$$$$$$$", req.params.id);
    const post = new Post({
            _id: req.params.id,
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            birthday: req.body.birthday,
            position: req.body.position
        })
        // console.log(req.params.id);
    Post.updateOne({ _id: req.params.id }, post).then((result) => {
        console.log(result);

        res.status(200).json({ message: "Updated Successful!" });
        // console.log("##############",post);
    });

});

// ////for editpost get method
app.get("/api/posts/:id", (req, res) => {
    console.log(req.params.id);
    Post.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    })
});

////for addpost and getdata for firsttime get method
app.get("/api/posts", (req, res) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const postQyery = Post.find();
    if (pageSize && currentPage) {
        postQyery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    console.log("@@@", pageSize);
    console.log("###", currentPage);
    console.log(req.query);
    postQyery.then(documents => {
        // console.log(documents);
        res.status(200).json({
            message: "Postfecthed",
            posts: documents

        });
    });
});

app.delete("/api/posts/:id", (req, res) => {
    // Post.findOne({_id:req.params.id})
    Post.deleteOne({ _id: req.params.id }).then((d) => {
        console.log(d);
        res.status(200).json({ message: "Post deleted!" });
    });
});

// app.get("/api/posts/:name",(req,res)=>{
//   Post.findOne({name: req.params.name}).then((s)=>{
//     console.log(s);
//     res.status(200).json({message : "Search!"});
//   })
// });



///

//for LOGIN         ////////        /////////       //////    //////   ///// ////

///

app.get("/api/login", (req, res) => {
    LogIn.find()
        .then(documents => {
            // console.log(documents);
            res.status(200).json({
                login: documents

            });
        });
})

app.post("/api/login", (req, res) => {
    console.log("$$$$$");
    const login = new LogIn({
        email: req.body.email,
        password: req.body.password
    });
    login.save().then((result) => {
        console.log(result);
        res.status(201).json({
            message: 'Post added successfully',
            login: result
        })
    });
});

app.get("/api/login/:email", (req, res) => {
    console.log("$$$$$$$$$$$", req.params.email);
    let login = new LogIn()
        //  ({
        //     _id: req.params.id,
        //     email:req.body.email,
        //     password : req.body.password
        //   });
        // console.log("$$$",login._id);
    LogIn.findOne({ email: req.params.email }).then(m => {
        console.log("###", m);
        if (m) {
            res.status(200).json({
                success: true,
                message: 'Login Successfully',
                data: m
            })
        } else {

            res.status(201).json({
                success: false,
                message: 'Invalid Data'
            })
        }

    })

});

app.put("/api/login/:email", (req, res) => {

    let login = new LogIn();
    login = req.params.email;
    console.log("$$$", login);
    LogIn.findOne({ email: req.params.email }).then(x => {
        console.log("4444", x);
        if (!x) {
            console.log("hello");
            res.status(201).json({

                success: false,
                message: 'Email Not Found'


            });
        } else {
            // console.log("hiii");
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'mansidesai1442@gmail.com',
                    pass: ''
                }
            });
            var genpassword = generator.generate({
                minlength: 8,
                maxlength: 15,
                numbers: true,
                symbols: true,
                uppercase: true,
                lowercase: true
            });
            var mailOptions = {
                from: 'mansidesai1442@gmail.com',
                to: x.email,
                subject: 'Localhost ResetPassword Request',
                text: 'Hello' + x.email + ' Thank You for Sign Up on Localhost.com ',
                html: 'Hello <strong>' + x.email + '</strong><br><br> Recently you are requested to reset your password so here is your password <br><br><strong>' + genpassword + '</strong> <br><br>Please save this in your files and do not share with anyone '
            };
            transporter.sendMail(mailOptions, function(error, login) {
                if (error) {
                    console.log(error);
                } else {
                    x.updateOne({ password: genpassword }, login).then((result) => {
                        console.log("***", result);
                    })

                    console.log('Password Sent: ' + genpassword);

                }
            });
            res.status(200).json({
                success: true,
                message: 'Password sent successfully on email ',
                data: x
            })
            console.log(genpassword);
        }
    }).catch(e => {
        console.log(e);
    })
});

module.exports = app;


// app.get("/api/posts", (req, res) => {
//   const pageSize = +req.query.pagesize;
//   const currentPage = +req.query.page;
//   const postQyery = Post.find();
//   let fetchedPosts ;
//   if(pageSize && currentPage){
//     postQyery.skip(pageSize * (currentPage - 1)).limit(pageSize);
// }
// console.log(req.query);
//  postQyery.then(document => {
//       fetchedPosts = document ; 
//       return Post.count();
//  })
//  .then(count =>{
//   res.status(200).json({
//     message: "Postfecthed",
//     posts: fetchedPosts,
//     maxPosts : count
//  });
//     });
//     });