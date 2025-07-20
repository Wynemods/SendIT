# SendIT Frontend

This is the frontend application for SendIT, Kenya's #1 courier service. The app is built with Angular standalone components and uses lazy-loaded feature modules for modularity and scalability.

## Project Structure

- **src/app/app.ts**: Main root component controlling layout and navigation.
- **src/app/app.routes.ts**: Main routing configuration defining the app's routes.

### Main Pages and Modules

- **Landing Page**
  - Component: `LandingComponent`
  - Path: `/`
  - Description: Marketing landing page showcasing SendIT's services, customer testimonials, and call to actions.

- **Auth Module**
  - Path: `/auth`
  - Pages:
    - `login`: User login page.
    - `signup`: User registration page.

- **User Module**
  - Path: `/user`
  - Pages:
    - `dashboard`: Main user dashboard showing parcel activity and stats.
    - `centered-dashboard`: Alternative dashboard layout.
    - `minimal-dashboard`: Minimalist dashboard layout.
    - `profile`: User profile management page.
    - `track-parcel`: Real-time parcel tracking page.

- **Admin Module**
  - Path: `/admin`
  - Pages:
    - `dashboard`: Admin dashboard for managing parcels, users, and system status.

## Notes

- The system is currently under development. Features and pages may be incomplete or subject to change.

## Additional Information

- The app uses Angular's standalone components and lazy loading for efficient loading and modularity.
- Navigation and layout are controlled dynamically based on the current route.
