## ECDSA Node

This project 🚀 serves as an example for implementing a client-server architecture to facilitate transfers 🔄 between various addresses. As there is only a single server 🖥️ in the background managing the transfers, it is evidently a highly centralized project. For the scope of this project, we won't be focusing on distributed consensus 🌐.

Integration of public key cryptography 🔐 has been achieved! Leveraging elliptic curve digital signatures 🔏, we ensure that the server only permits transfers authorized by the rightful owner of the associated address, thereby enhancing security and authenticity ✅.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
