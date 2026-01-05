## Role of Frontend (FE) in Web Application
The **Frontend (FE)** is the part of a web application that users directly see and interact with in their browser. Its mail role is to provide a smooth, interactive, and user-friendly experience.

### 1. User Interface (UI)
- Displays visual elements such as layout, buttons, forms, images, and text.
- Ensure a consistent and responsive design across different devices.
- Built using HTML for structure, CSS for styling, and Javascript for behavior.

### 2. User Interaction
- Handles user actions like clicks, typing, scrolling, and form submissions.
- Provides immediate feedback such as validations, loading indicators, and error messages.
- Manages client-side state to enable dynamic updates without reloading the page.

### 3. Communication with Backend
- Sends requests to the backend server using APIs.
- Receives data from the backend and updates the UI accordingly.
- Uses tools like Fetch API or Axios to handle HTTP requests.

## Role of Backend (BE) in a Web Application
The **Backend (BE)** is the part of a web application that runs on the server and handles the core logic, data processing, and security. It works behind the scenes to support the frontend.

### 1. Server-side Processing
- Handles business logic and application rules.
- Processes client requests and prepares appropriate responses.
- Manages APIs that connect the frontend with the backend services.

### 2. Database Handling
- Stores, retrieves, updates, and deletes data in the database.
- Ensures data consistency and integrity.
- Uses databases such as MySQL, PostgreSQL, MongoDB, etc., to manage application data.

### 3. Security and Authentication
- Manages user authentication and authorization.
- Protects sensitive data using encryption and secure protocols.
- Prevents unauthorized access and handles validations on the server side.

## Business Logic

**Business Logic** refers to the set of rules, conditions, and workflows that define how a web application operates according to business requirements. It controls how data is processed, validated, and transformed to meet real-world business needs.

Business logic acts as a bridge between the **frontend** (user interface) and the **backend** (data and services). It ensures that user actions follow predefined rules before interacting with the database or returning a response.

### Key Characteristics of Business Logic
- Enforces business rules and policies.
- Decides how data flows through the application.
- Ensures consistency, accuracy, and correctness of operations.
- Is usually implemented on the backend for security and reliability.

### Real-World Examples of Business Logic in Web Applications

#### 1. E-Commerce Application
- Calculates the final price of a product by applying discounts, taxes, and shipping charges.
- Prevents users from purchasing out-of-stock items.
- Allows order placement only after successful payment confirmation.

#### 2. Banking or Finance Application
- Validates sufficient account balance before allowing a money transfer.
- Applies transaction limits based on account type.
- Blocks transactions if suspicious activity is detected.

#### 3. Online Booking System
- Checks seat or room availability before confirming a booking.
- Prevents double bookings for the same time slot.
- Calculates cancellation fees based on cancellation time.

#### 4. User Authentication System
- Allows login only if username and password are valid.
- Locks an account after multiple failed login attempts.
- Assigns roles and permissions (admin, user, guest).

## Client–Server Model

The **Client–Server Model** is an architectural pattern used in web applications where tasks are divided between two entities: the client and the server. The client requests services or data, and the server processes those requests and sends back appropriate responses.


### 1. Who is the Client
- The **client** is the user-facing part of the application.
- It is usually a web browser (Chrome, Firefox, etc.) or a mobile application.
- The client is responsible for displaying the user interface and capturing user input.
- It sends requests to the server for data or services.

### 2. Who is the Server
- The **server** is a powerful system that stores data and runs application logic.
- It handles client requests, processes business logic, and manages databases.
- The server ensures security, authentication, and authorization.
- It sends responses back to the client.

### 3. How Communication Happens Between Them
- Communication occurs over the internet using the **HTTP/HTTPS** protocol.
- The client sends an HTTP request (GET, POST, PUT, DELETE) to the server.
- The server processes the request and returns an HTTP response, usually in JSON or HTML format.
- The client receives the response and updates the user interface accordingly.

![Client Server Diagram](https://substackcdn.com/image/fetch/$s_!F636!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa29b682c-cff6-4ed3-a085-4347eb020b06_1906x1150.png)

## Three-Tier Architecture

**Three-Tier Architecture** is a widely used design pattern in web applications where the application is divided into three independent layers. Each layer has a specific responsibility, which helps in better organization, scalability, and maintenance of the application.

### 1. Presentation Layer
- This is the **user interface layer** of the application.
- It includes web pages, forms, buttons, and other UI components.
- Responsible for displaying data to users and capturing user input.
- Technologies used: HTML, CSS, JavaScript, React, Angular, etc.
- Communicates only with the Application Layer.

### 2. Application (Business) Layer
- Also called the **Business Logic Layer**.
- Contains the core logic and rules of the application.
- Processes user requests received from the presentation layer.
- Performs validations, calculations, and decision-making.
- Acts as a bridge between the presentation layer and the data layer.
- Technologies used: Node.js, Java, .NET, Spring Boot, etc.

### 3. Data Layer
- Responsible for **data storage and data management**.
- Handles database operations such as create, read, update, and delete (CRUD).
- Ensures data consistency and integrity.
- Technologies used: MySQL, PostgreSQL, MongoDB, Oracle, etc.

### Why Three-Tier Architecture is Used
- **Separation of concerns**: Each layer has a specific responsibility.
- **Scalability**: Each tier can be scaled independently.
- **Maintainability**: Changes in one layer do not affect others.
- **Security**: Direct access to the database is restricted.
- **Reusability**: Business logic can be reused across different applications.

![Three tier Architecture](https://vfunction.com/wp-content/uploads/2024/05/blog-3-tier-application.webp)

## JavaScript as a Backend Language

JavaScript is widely used as a backend language because it is fast, scalable, and supported by a rich ecosystem. With the introduction of runtime environments like **Node.js**, JavaScript can now run outside the browser and handle server-side development efficiently.

### 1. Performance
- JavaScript uses a **non-blocking, event-driven architecture**, making it highly efficient.
- Node.js runs on the **V8 JavaScript engine**, which provides fast execution.
- Handles multiple client requests concurrently without creating multiple threads.
- Suitable for real-time applications like chat apps and streaming services.

### 2. Ecosystem
- Has a vast ecosystem through **npm (Node Package Manager)**.
- Provides thousands of reusable libraries and tools for backend development.
- Easy integration with frontend JavaScript, enabling full-stack development.
- Strong community support and continuous updates.

### 3. Popular Backend Frameworks
- **Express.js** – Lightweight and flexible framework for building APIs.
- **NestJS** – Structured and scalable framework using TypeScript.
- **Fastify** – High-performance framework focused on speed and low overhead.
- **Koa.js** – Modern framework developed by the creators of Express.



