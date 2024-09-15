# Fruit.ai

## Overview

Fruit.ai is a web application designed to provide a seamless user experience for exploring fruits. It includes a login page, home page, chatbot, translator, FAQ section, and an about page. The application is mobile-friendly and supports CRUD operations for managing FAQs related to fruits.

## Features

1. **Login Page**:
   - User Interface only
   - Dummy UserID and Password
   - Redirects to the homepage upon successful login

2. **Home Page**:
   - Displays four services: Chat, Translator, FAQ page, and About page
   - Each service redirects to its respective page on click

3. **Chatbot Page**:
   - Personal chatbot displaying a list of fruits as cards
   - Detailed view of individual fruits
   - Add fruits to a cart and generate a bill

4. **Translator Page**:
   - Input box to translate text into different languages

5. **FAQ Page**:
   - Basic CRUD functionality to create, read, update, and delete FAQs related to fruits

6. **About Page**:
   - Information about the Fruit.ai application

## UI/UX Design

The application is designed to be mobile-friendly to ensure a smooth experience across different devices. All pages follow responsive design principles.

## Front-End Task

### Pages

1. **Login Page**:
   - User interface only
   - Dummy credentials: `UserID: dummy` and `Password: password`
   - Redirects to the home page on successful login

2. **Home Page**:
   - Four main sections: Chat, Translator, FAQ, About
   - Each section navigates to its respective page

3. **Chatbot Page**:
   - Displays a list of fruits as cards
   - Detailed view of individual fruits
   - Functionality to add fruits to a cart and generate a bill

4. **Translator Page**:
   - Input box to translate text
   - Displays translated text in the selected regional language

5. **FAQ Page**:
   - CRUD functionality to manage FAQs
   - Users can add, edit, and delete FAQs

6. **About Page**:
   - Basic information about the application

### Tools & Technologies

- **React**: For building the front-end
- **Vite**: For development server and build process
- **CSS**: For styling

## Back-End Task

### API Endpoints

- **GET /faqs**: Fetch all FAQs
- **GET /faqs/:id**: Fetch a single FAQ by ID
- **POST /faqs**: Create a new FAQ
- **PUT /faqs/:id**: Update an FAQ by ID
- **DELETE /faqs/:id**: Delete an FAQ by ID

### Framework

- **Flask**: Used for the back-end API
- **Flask-CORS**: To handle Cross-Origin Resource Sharing (CORS)

### Error Handling

Proper error handling and validation are implemented for all API endpoints to ensure robustness and reliability.

## Deployment

### Front-End

- **Deployment**: Vercel or Netlify (or any other hosting service)
- **Live Demo**: [Link to the deployed frontend application]

### Back-End

- **Deployment**: Heroku, AWS, or Render (or any other hosting service)
- **Live Demo**: [Link to the deployed backend application]

### Environment Configuration

Ensure that the front end communicates with the back end using environment variables for API URLs. Update `.env` files or environment variables as needed.

## Setup Instructions

### Front-End

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fruit-ai.git
1. Navigate to the Front-End Directory:

```bash 
cd fruit-ai
```

3. Install Dependencies:

``` bash
npm install
```

3. Start the Development Server:

``` bash
npm run dev
```
Open Your Browser: Navigate to [http://localhost:5174 to view the application.](LINK)

## Back-End
Navigate to the Back-End Directory:

``` bash
cd src/backend
```

1. Create and Activate a Virtual Environment:

``` bash
python -m venv venv
.\venv\Scripts\activate  # For Windows
source venv/bin/activate  # For macOS/Linux
```

2. Install Dependencies:

``` bash

pip install Flask flask-cors
```

3. Run the Flask Server:

```bash
python app.py
```

4. Test API Endpoints: Use tools like Postman or cURL to test the endpoints:

GET [http://127.0.0.1:5000/faqs]
GET [http://127.0.0.1:5000/faqs/1]
POST [http://127.0.0.1:5000/faqs with JSON body]()
PUT [http://127.0.0.1:5000/faqs/1 with JSON body]()
DELETE [http://127.0.0.1:5000/faqs/1]()
Deliverables
Source Code: Complete source code for front-end and back-end (GitHub Repository)
README: Detailed setup and run instructions, project structure, and design decisions.
Live Demo: [](Netlify)
# License
## This project is licensed under the MIT License. See the LICENSE file for details.

