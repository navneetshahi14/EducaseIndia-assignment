# School Management API

This is a Node.js and Express-based API for managing school data, including adding new schools and retrieving a list sorted by proximity.

## Features
- **Add School API**: Allows adding new schools to the database.
- **List Schools API**: Retrieves a sorted list of schools based on proximity to a given location.
- **Uses MySQL as the database**, hosted on **Railway**.
- **Deployed APIs available** for testing.

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Hosting**: Railway (for MySQL), Render (for API deployment)

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/navneetshahi14/EducaseIndia-assignment.git
cd EducaseIndia-assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following:
```env
DB_HOST=gondola.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=railway
DB_PORT=19933
DB_SSL=true
PORT=5000
```

### 4️⃣ Start the Server
```sh
npm start
```
The API will run on `http://localhost:5000`.

---

## 📌 API Endpoints

### **1️⃣ Add a School**
**Endpoint:** `POST /addSchool`

**Request Body:**
```json
{
  "name": "ABC High School",
  "address": "123 Street, City",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

**Response:**
```json
{
  "message": "School added successfully"
}
```

---

### **2️⃣ List Schools by Proximity**
**Endpoint:** `GET /listSchools?latitude=28.7041&longitude=77.1025`

**Response:**
```json
[
  {
    "id": 1,
    "name": "ABC High School",
    "address": "123 Street, City",
    "distance": 2.3
  },
  {
    "id": 2,
    "name": "XYZ Academy",
    "address": "456 Avenue, City",
    "distance": 5.1
  }
]
```

---

## 🖥 Deployment on Railway & Render

- **GitHub Repository:** [EducaseIndia Assignment](https://github.com/navneetshahi14/EducaseIndia-assignment.git)
- **Live API Endpoint:** [EducaseIndia Assignment API](https://educaseindia-assignment.onrender.com)

---

## 📄 Postman Collection
[Postman Collection Link](https://teamworkspace-9527.postman.co/workspace/New-Team-Workspace~9d33cdc7-f793-42c8-a9e3-4fb7570f1dca/collection/29637854-0f5ac3b0-9e85-4e20-af72-46acbc81f6d1?action=share&creator=29637854)

---

## 📌 License
MIT License

---

## 📩 Contact
For issues or queries, contact **Navneet Shahi** at [navneet.shahi2004@gmail.com](mailto:navneet.shahi2004@gmail.com).

