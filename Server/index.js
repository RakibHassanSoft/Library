const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const port = 5000;
// const { generateToken, verifyToken } = require('../Jwt');


//middleware
// app.use(cors())
//settting to frontend
app.use(cors({
    origin:['http://localhost:5173','https://ubiquitous-monstera-fe46e8.netlify.app'],
    credentials:true

}))
app.use(express.json())
app.use(cookieParser())
//Book
//Book1234



//my middleware
const verifyTOken = async(req,res,next)=>{
    const token = req.cookies?.token;
     
    // console.log("value of token in midleware",token)
    if(!token){
        return res.status(401).send({message: "Not authorized"})
    }
    jwt.verify(token,process.env.Key,(err,decoded)=>{
        //err
        if(err){
            return res.status(401).send({message: "unauthorized"})
        }

        //valid
        // console.log("value in the token ",decoded)
        req.user = decoded;
        next();
    })
  
}




const { MongoClient, ServerApiVersion, ObjectId, ReturnDocument } = require('mongodb');
const uri = `mongodb+srv://${process.env.User}:${process.env.Pass}@cluster0.drqortc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const booksDatabase = client.db('library').collection('books')
        const usersDatabase = client.db('library').collection('users')
        const BorrowedDatabase = client.db('library').collection('borrowed')

        //require('crypto').randomBytes(64).toString('hex')
    //   //jwt 
        app.post('/jwt',async(req,res)=>{
            const user  = req.body;
            // console.log('user for token',user)
            const token = jwt.sign(user,process.env.Key,{expiresIn:'1h'});
            res
            .cookie('token',token,{
                httpOnly:true,
                secure:true,
                sameSite:'none'
            })
            .send({success:true});
    
        })

        app.post('/logout', async(req, res) => {
        const user = req.body;
        console.log("loggeding out",user)
        res
        .clearCookie('token',{maxAge:0})
        .send({success:true})
        });

    


       //User
        app.post('/register', async (req, res) => {
            const { email, password, rePassword, displayName, role, url } = req.body;
            console.log(email, password, displayName, role, rePassword, url)

            if (password !== rePassword) {
                return res.status(400).send({ message: "Password does not mathched" })
            }
            const existingUser = await usersDatabase.findOne({ email });
            if (existingUser) {
                return res.status(400).send({ message: "User already exist" })
            }

            // const hasPassword = await bcrypt.hash(password, 10);

            const newUser = {
                email,
                // password: hasPassword,
                password,
                displayName,
                role,
                url
            }



            const result = await usersDatabase.insertOne(newUser);
            // const token = generateToken(email, role);
            // res.status(201).send({ message: 'User created successfully', token }); // 201 for created resources
            res.status(201).send({ message: 'User created successfully' }); // 201 for created resources

        })

        app.get('/login', async (req, res) => {
            try {

                const { email, password } = req.body;

                const user = await usersDatabase.findOne({ email })

                if (!user) {
                    return res.status(400).send({ message: "Invalid emial" })
                }

                const isPasswordValid = await bcrypt.compare(password, user.password)

                if (!isPasswordValid) {
                    return res.status(400).send({ message: "Invalid user" })
                }

                const token = generateToken(email, user.role);
                res.status(200).send({ message: "Successful", token: token })

            } catch (error) {

            }
        })

        // //    get user all data by email data(DONE)
        app.get("/user/:email", async (req, res) => {
            const userEmail = req.params.email;

            const result = await usersDatabase.find({ email: userEmail }).toArray()

            res.send(result)

        })















        // Add book (DONE)(Added)
        app.post('/book', async (req, res) => {
            const { bookName, quantity, rating, category, description, date, userId, url,
                Author,
                AuthorEmail } = req.body;
            const newBook = {
                bookName, quantity, rating, category, description, date, userId, url,
                Author,
                AuthorEmail
            }
            // console.log(newBook)

            const reuslt = await booksDatabase.insertOne(newBook)
            res.send(reuslt)
            // const {name} = req.body;
            // res.send(reuslt)
        })
        //Update book (DONE)(Added)
        app.put('/books/:id', async (req, res) => {
            const id = req.params.id;
            const newData = req.body;
            console.log(id, newData)
            const { bookName1, quantity1, rating1, category1, description1, date1, userId1, url1, Author,
                AuthorEmail, } = newData
            const newData1 = {
                bookName: bookName1, quantity: quantity1, rating: rating1, category: category1, description: description1, date: date1, userId: userId1, url: url1, Author,
                AuthorEmail,
            }

            try {
                const filter = { _id: new ObjectId(id) };
                const update = { $set: newData1 }

                const result = await booksDatabase.updateOne(filter, update)

                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })

        // get each category book(Added)
        app.get('/books', async (req, res) => {
            const category = req.query.category; // Get the category query parameter

            try {
                let filteredBooks;

                if (category) {
                    // If category parameter is provided, filter books by category
                    filteredBooks = await booksDatabase.find({ category }).toArray();
                } else {
                    // If category parameter is not provided, fetch all books
                    filteredBooks = await booksDatabase.find({}).toArray();
                }

                res.status(200).json(filteredBooks);
            } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
        });


        //Get all books.(Done)(Added)
        app.get('/books', async (req, res) => {
           
            try {
                const allBooks = await booksDatabase.find({}).toArray();
                res.status(200).json(allBooks);
            } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
        });

        //Get a specific book by ID.(DONE)
        app.get('/books/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: new ObjectId(id) }
            const result = await booksDatabase.findOne(query)
            res.send(result)
        })


        //borrow and return part






























        //Borrow a book by ID(DONE perfectly)
        app.post('/books/borrow/:id', async (req, res) => {
            const id = req.params.id;
        //    res.send(id)
            const { bookName, category, description, date, userEmail } = req.body;

            const book = await booksDatabase.findOne({ _id: new ObjectId(id), quantity: { $gt: 0 }});
            if (!book) {
                return res.send("No book found");
            }
        //     // console.log(userEmail)
            const user = await usersDatabase.findOne({ email: userEmail});
            if (!user) {
                return res.send("No user found");
            }

            const userBook = await BorrowedDatabase.findOne({ bookId: id,status:'borrow'});
              if (userBook) {
                return res.send("Already have this book");
            }
           //update the book quantity
            const updateBook = await booksDatabase.updateOne({ _id: new ObjectId(id)},{$inc:{quantity:-1}});

            //adding field in borrowed database as status purched
            const purchedBookAdding= await BorrowedDatabase.insertOne({bookName, category, description, date,  userEmail, bookId:id,status:'borrow'})


            // Send the updated book as the response
            res.send(purchedBookAdding);
        });


        //get all borrowed books(DONE)
        app.get('/books/borrow/:userEmail',verifyTOken, async (req, res) => {
            const userEmail = req.params.userEmail;
            //from varify token we get req.user
            // console.log(req.user.email)
            console.log("toktoktoken",req.cookies)

           if(userEmail !== req.user.email){
            res.status(403).send({message:" Different user"})
           }
            // Check if the user exists
            const user = await usersDatabase.findOne({ email: req.user.email});
            if (!user) {
                return res.send("No user found");
            }


            const result = await BorrowedDatabase.find({userEmail:userEmail}).toArray();

            // Send the updated book as the response
            res.send(result);
        });


        //return a book by ID.*(Perfectly working)
        app.post('/books/return/:id', async (req, res) => {
                const id = req.params.id;
                // console.log(id)
              
                const {   return_date, email,borrowId } = req.body;
   
                //if there is user
                const user = await usersDatabase.findOne({ email: email});
                if (!user) {
                    return res.send("No user found");
                }
                
                //if the book has been borrow by the user
                const userBook = await BorrowedDatabase.findOne({ bookId: id,status:'borrow',userEmail:email});
                  if (!userBook) {
                    return res.send("Do not have this book");
                }
               //update the book quantity
                const updateBook = await booksDatabase.updateOne({ _id: new ObjectId(id)},{$inc:{quantity:+1}});
           
                //adding field in borrowed database as status purched
                const returingBookAdding = await BorrowedDatabase.updateOne(
                    { _id: new ObjectId(borrowId) },
                    {
                        $set: {
                            status: 'Returned',
                            return_date: return_date // Assuming return_date is a variable holding the return date value
                        }
                    }
                );
    
    
            //     // Send the updated book as the response
                res.send(returingBookAdding);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('This is server')
})

app.listen(port, () => {
    console.log('Server is running on 5000')
})