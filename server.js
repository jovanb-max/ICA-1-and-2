// // // // const express = require('express')
// // // // const app = express()
// // // // app.get('/', (req, res) => res.send('Hello World!'))
// // // // app.listen(3000, () => console.log('Server ready'))


// // const express = require('express');
// // const app = express();
// // const port = 3000;

// // // Example endpoint that returns a 404 status code
// // app.get('/notfound', (req, res) => {
// //   res.status(404).json({ error: 'Resource not found' });
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running at http://localhost:${port}`);
// // });

// // const express = require('express');
// // const app = express();
// // const port = 3000;

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // Define a route that accepts query parameters for date, title, body, and uuid
// // app.get('/query-example', (req, res) => {
// //     // Sample data for demonstration purposes
// //     const date = req.query.date || '2024-03-04';
// //     const title = req.query.title || 'Sample Title';
// //     const body = req.query.body || 'Sample Body';
// //     const uuid = req.query.uuid || '1234-5678-9012';

// //     // You can perform further processing with the obtained values
// //     // For now, just sending them as a JSON response
// //     res.json({ date, title, body, uuid });
// // });

// // app.listen(port, () => {
// //     console.log(`Server listening at http://localhost:${port}`);
// // });

// //GET METHOD 2 ROUTES
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// res.status(200).json({ message: 'Success!'});

// // Route for handling date and title parameters
// app.get('/query-example-date-title', (req, res) => {
//     const date = req.query.date || '2024-03-04';
//     const title = req.query.title || 'Sample Title';
    

//     res.json({ date, title });
// });

// // Route for handling body and uuid parameters
// app.get('/query-example-body-uuid', (req, res) => {
//     const body = req.query.body || 'Sample Body';
//     const uuid = req.query.uuid || '1234-5678-9012';

//     res.json({ body, uuid });
// });

// //POST METHOD

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Route for handling date and title parameters with POST method
// app.post('/', (req, res) => {
//     const { date, title } = req.body || {};
    
//     // Default data if not provided in the request
//     const defaultDate = date || '2024-03-06';
//     const defaultTitle = title || 'Default Post Title';

//     // You can add validation or additional processing here
//     res.json({ date: defaultDate, title: defaultTitle });
// });

// // Route for handling body and uuid parameters with POST method
// app.post('/', (req, res) => {
//     const { body, uuid } = req.body || {};
    
//     // Default data if not provided in the request
//     const defaultBody = body || 'Default Post Body';
//     const defaultUuid = uuid || '9876-5432-1098';

//     // You can add validation or additional processing here
//     res.json({ body: defaultBody, uuid: defaultUuid });
// });


// // PUT method


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Route for handling data with PUT method
// app.put('/put-example', (req, res) => {
//     const { key1, key2 } = req.body || {};
    
//     // Default data if not provided in the request
//     const defaultKey1 = key1 || 'Default Value 1';
//     const defaultKey2 = key2 || 'Default Value 2';

//     // You can add validation or additional processing here
//     res.json({ key1: defaultKey1, key2: defaultKey2 });
// });



// //DELETE method

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Sample data for demonstration purposes
// let items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' }
// ];

// // Route for handling DELETE requests to delete an item by ID
// app.delete('/delete-example/:id', (req, res) => {
//     const itemId = parseInt(req.params.id);
    
//     // Find the index of the item by ID
//     const index = items.findIndex(item => item.id === itemId);

//     if (index !== -1) {
//         // Remove the item from the array
//         const deletedItem = items.splice(index, 1)[0];
//         res.json({ message: `Item with ID ${itemId} deleted successfully`, deletedItem });
//     } else {
//         res.status(404).json({ error: `Item with ID ${itemId} not found` });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });


//connecting postgres below

// require('dotenv').config();
// const express = require('express');
// const app = express();
// const routes = require('./routes');
// app.use(express.json());
// app.use('/api', routes);
// app.use(express.static('app'));
// app.listen(process.env.PORT, () => {
//  console.log(`server on port ${process.env.PORT}`)
// });


//JSON Web Tokens (JWT) Tutorial below

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/hello', (req, res) => {
 res.json(["Hello"]);
});
app.listen(process.env.PORT, () => {
 console.log("Server is listening on port %s", process.env.PORT);
});


require('dotenv').config();
const express = require('express');
const api = require('./api.js')
app.use(express.json());
app.use('/api', api);
app.listen(process.env.PORT, () => {
 console.log("Server is listening on port %s", process.env.PORT);
});

require('dotenv').config();
const express = require('express');
const api = require('./api.js')
const authorize = require('./authorize.js');
app.use(express.json());
app.use('/api', authorize, api);
app.listen(process.env.PORT, () => {
 console.log("Server is listening on port %s", process.env.PORT);
});







