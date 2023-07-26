import { Application } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
// import routes from "../routes/route"


function swaggerDocs(app:Application, port:any) {
    const options = {
        definition: {
          openapi: "3.1.0",
          info: {
            title: "Instagram API with Swagger",
            version: "0.1.0",
            description:
              "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
              name: "MIT",
              url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
              name: "Instagram",
              url: "https://logrocket.com",
              email: "info@email.com",
            },
          },
          servers: [
            {
              url: "http://localhost:3000",
            },
          ],
        },
        apis: ["src/routes/route.ts"],
      };
      
      const specs = swaggerJsdoc(options);
      app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
      );
        
}

export default swaggerDocs