import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'to-do-list API',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                responseUser: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            example: '123e4567-e89b-12d3-a456-426614174000',
                        },
                        name: { type: 'string', example: 'John Doe' },
                        email: {
                            type: 'string',
                            example: 'john.doe@example.com',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2024-01-01T00:00:00Z',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2024-01-01T00:00:00Z',
                        },
                    },
                },

                createUser: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: {
                            type: 'string',
                            example: 'John Doe',
                        },
                        email: {
                            type: 'string',
                            example: 'john.doe@example.com',
                        },
                        password: {
                            type: 'string',
                            example: 'password123',
                        },
                    },
                },

                updateUser: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'newName',
                        },
                        email: {
                            type: 'string',
                            example: 'newEmail@example.com',
                        },
                        password: {
                            type: 'string',
                            example: 'newPassword123',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/modules/**/*.route.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
