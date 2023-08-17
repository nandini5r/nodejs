import { Application } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


function swaggerDocs(app: Application, port: any) {
    const options = {
        definition: {
            openapi: "3.1.0",
            info: {
                title: "Pinterest Clone with Swagger",
                version: "0.1.0",
                description:
                    "This is a simple Pinterest Clone API application made with Express and documented with Swagger",
                license: {
                    name: "Pinterest",
                    url: "https://spdx.org/licenses/MIT.html",
                },
                contact: {
                    name: "Pinterest Clone",
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
 
        apis: ['src/swagger/onboarding.yaml', 'src/swagger/pins.yaml', 'src/swagger/category.yaml', 'src/swagger/user.yaml'],
        
    };

    const specs = swaggerJsdoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );

}

export default swaggerDocs