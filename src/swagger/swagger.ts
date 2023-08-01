import { Application } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import routes from "../routes/routes";


function swaggerDocs(app: Application, port: any) {
    const options = {
        definition: {
            openapi: "3.1.0",
            info: {
                title: "Advertisement Management System with Swagger",
                version: "0.1.0",
                description:
                    "This is a simple Advertisement Management System API application made with Express and documented with Swagger",
                license: {
                    name: "MIT",
                    url: "https://spdx.org/licenses/MIT.html",
                },
                contact: {
                    name: "Advertisement Management System",
                    url: "https://logrocket.com",
                    email: "info@email.com",
                },
            },
            servers: [
                {
                    url: "http://localhost:4000",
                },
            ],
        },
        apis: ['./routes/routes.ts'],
    };

    const specs = swaggerJsdoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );

}

export default swaggerDocs