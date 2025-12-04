// instancier la class Server, que j'ai crée dans server.ts
// avec New, car on crée un nouvel objet à partir d'une class

import Server from "./core/server";

const server = new Server().start();

// démarrer le serveur
// process.env.VAR : accéder aux variables d'environnement 
server.listen(process.env.PORT);
