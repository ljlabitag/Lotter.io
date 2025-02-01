import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: "src/app/api",
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Lotto Results API",
                version: "1.0.0",
                description: "API for retrieving lotto information"
            },
            servers: [
                {
                    url: "http://localhost:3000",
                    description: "Development server"
                }
            ],
            security: []
            // ,
            // components: {
            //     securitySchemes: {
            //         bearerAuth: {
            //             type: "http",
            //             scheme: "bearer",
            //             bearerFormat: "JWT"
            //         }
            //     }
            // }

        }
    });

    return spec;
}