# Quizzer

**Quizzer** is an interactive quiz platform built using React. It allows users to participate in quizzes, track their progress, and view their scores. The app provides a user-friendly interface for both quiz creators and participants, making it easy to create, manage, and take quizzes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Quiz Creation**: Easily create quizzes with multiple question types.
- **Real-Time Scoring**: Instant feedback on quiz answers.
- **Progress Tracking**: Track user progress and scores over time.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/quizzer.git
   cd quizzer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_API_URL=<your_backend_api_url>
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the application**:

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

## Usage

- **Creating a Quiz**:
  1. Log in to the admin dashboard.
  2. Navigate to the "Create Quiz" section.
  3. Fill in the quiz details, add questions, and publish.

- **Taking a Quiz**:
  1. Log in as a user.
  2. Browse available quizzes.
  3. Select a quiz and start answering questions.
  4. Submit the quiz to receive your score.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── services
│   ├── store
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
