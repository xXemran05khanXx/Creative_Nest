

---

# Creative Nest

**Creative Nest** is a modern studio rental platform built using the MERN stack. It allows users to explore, book, and manage creative spaces based on their preferences, offering an intuitive and seamless booking experience.

## Features 🚀
- 🌍 **Search by Location**: Find studios based on geographic location and dates.
- 📅 **Real-Time Booking**: Book studios for specific dates with live availability.
- 🔒 **Secure Authentication**: User registration and login with **NextAuth**.
- 💼 **User Dashboard**: View and manage reservations, including upcoming trips.
- 🌐 **Interactive Map**: Address-based map integration for studio locations.

---

## Tech Stack 🛠️
- **Frontend**: React, Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB (with Prisma ORM)
- **Authentication**: NextAuth

---

## Installation 🖥️

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Xxemran05khanxX/creative-nest.git
    cd creative-nest
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and configure it with your own environment variables, including MongoDB URI and NextAuth secrets:
    ```bash
    NEXT_PUBLIC_MAP_API_KEY=your_google_maps_api_key
    DATABASE_URL=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open your browser**:
    Visit [http://localhost:3000](http://localhost:3000) to start using **Creative Nest**.

---

## Usage 🧭

### Searching for Studios
- Users can search for available studios based on location and date inputs.
  
### Booking a Studio
- After selecting a studio, users can confirm their booking for specific dates.
  
### Managing Reservations
- Users can view, edit, or cancel their bookings via the user dashboard.

---

## Contributing 🤝
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Make your changes and commit them.
4. Push to your branch and create a pull request.

---

## License 📜
This project is licensed under the MIT License.

Feel free to modify the code and share your improvements!

---

This README gives potential contributors and users a clear guide to getting started with your **Creative Nest** project!
