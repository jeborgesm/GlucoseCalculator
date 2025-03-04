# Food App

This is a simple CRUD application built with Python (Flask) and React. The application allows users to manage a list of foods stored in a CSV file. The frontend uses Bootstrap for styling.

## Features

- Add new foods
- Edit existing foods
- Delete foods
- Search foods

## File Structure

```
my-app/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── foods.csv
│   ├── Dockerfile
│   ├── .render.yaml
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── FoodList.js
│   │   │   ├── FoodForm.js
│   │   │   ├── FoodSearch.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
├── .gitignore
├── README.md
```

## Setup

### Backend

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

4. Run the Flask application:

```bash
python app.py
```

### Frontend

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the required packages:

```bash
npm install
```

3. Start the React application:

```bash
npm start
```

## Deployment

This application is configured to be deployed on Render.com. The backend uses a Dockerfile for deployment, and the configuration is specified in the `.render.yaml` file.

```yaml
services:
  - type: web
    name: my-backend
    env: docker
    plan: free
    dockerfilePath: ./backend/Dockerfile
    buildCommand: docker build -t my-backend .
    startCommand: docker run -p 5000:5000 my-backend
```

Happy coding!