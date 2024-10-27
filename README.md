# Travel Trucks

A React.js application that displays a catalog of campers, allowing users to filter results, view detailed camper information, add campers to favorites, and submit bookings. This project integrates Redux for state management and pulls data from a backend API.

## Features

- **Catalog Display**: Displays a list of campers fetched from a backend API.
- **Filtering**: Users can filter campers by various criteria to refine their search.
- **Favorite Campers**: Users can add campers to a favorites list, with favorite state persistence.
- **Camper Details Page**: Displays comprehensive information on each camper, including images, rating, location, and more.
- **Booking Form**: Allows users to submit a booking request, complete with form validation.

## Tech Stack

- **React.js**: Frontend library for building user interfaces.
- **Redux**: Manages the global state, including catalog data, filters, and favorites.
- **Formik & Yup**: Used for form management and validation in the booking form.
- **CSS Modules**: Component-specific styling.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RomanYakymovych/TravelTrucks.git
   cd TravelTrucks
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── redux/            # Redux store, actions, and reducers
├── services/         # API services
├── styles/           # Global styles and CSS modules
└── utils/            # Helper functions and constants
```

## Available Scripts

```bash
npm run dev          # Starts development server
npm run build        # Builds the app for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm test            # Run tests
```

## API Integration

The application connects to a RESTful API with the following endpoints:

- `GET /api/campers` - Fetch all campers
- `GET /api/campers/:id` - Fetch single camper details
- `POST /api/bookings` - Submit a booking request

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
