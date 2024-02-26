Location API

The Location API is a tool for managing and retrieving location data efficiently. With endpoints designed to create, retrieve, update, and delete location documents, along with features for paginated retrieval and updating based on categories, it offers comprehensive functionality for handling location data.

Key Features:

Creating a Location Document: Use the endpoint /api/locations with the POST method to create a new location document. The response includes the location ID and an optional message.

Paginated Retrieval of All Documents: Access the /api/locations endpoint with the GET method to retrieve a paginated list of all location documents. You can specify the page number and page size as parameters.

Retrieval of a Specific Location Document by ID: Utilize the /api/locations/{location_id} endpoint with the GET method to retrieve detailed information about a specific location document identified by its unique ID.

Paginated Retrieval of Location Documents Based on Category: Access the /api/locations endpoint with the GET method and provide the category as a query parameter to retrieve a paginated list of location documents within the specified category.

Updating a Location Document by Its ID: Use the /api/locations/{location_id} endpoint with the PATCH method to update a location document identified by its unique ID. The response provides a message indicating the success or failure of the update.

Updating Location Documents by Their Category: Utilize the /api/locations endpoint with the PATCH method and specify the category as a query parameter to update multiple location documents within the specified category. The response includes a message indicating the completion status and the number of affected documents.

Deleting a Location Document by Its ID: Access the /api/locations/{location_id} endpoint with the DELETE method to delete a location document identified by its unique ID. The response provides a message indicating the success or failure of the deletion.

Getting Started:

To run the Location API project locally, follow these steps:

**1. Clone the GitHub Repository: Clone the repository to your local machine using the following command:**

git clone https://github.com/monika4445/Location-API.git

**2. Install Dependencies: Navigate to the project directory and install the required dependencies by running:**

npm install

**3. Set Up the Database:**

Configure the PostgreSQL database settings in the project, such as the database name, username, password, and host, in the appropriate configuration file (e.g., config.js or .env file).

**4. Migrate the Database:**

Run the database migration script to create the necessary tables in the PostgreSQL database. You can do this by running the Sequelize migration command:

npx sequelize-cli db:migrate

**5. Run the Application: Start the application by running the following command:**

npm run dev

**6. Access the API Documentation: Once the application is running, you can access the Swagger API documentation by navigating to the following link:**

[Swagger API Documentation](http://localhost:3100/api-doc/)

By following these steps, you'll be able to set up and run the Location API project smoothly, enabling you to leverage its features for managing location data.