// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Navbar from "../src/Component/Navbar";
// import "./App.css";
// import LandingPage from "./sections/LandingPage";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import LawSection from "./Pages/LawSection";
// import About from "./Pages/About";
// import Chatbot from "./Pages/Chatbot";

// // Example auth check (replace with your real logic)
// const isAuthenticated = () => {
//   return localStorage.getItem("authToken") !== null;
// };

// // Protected Route Wrapper
// function ProtectedRoute({ children }) {
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }

// // Layout Wrapper to hide Navbar on login, signup, and chatbot pages
// function Layout({ children }) {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/chatbot";

//   return (
//     <div className="w-full h-full">
//       {!hideNavbar && <Navbar />}
//       {children}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/law-section" element={<LawSection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/chatbot" element={<Chatbot />} />

//           {/* Example Protected Route */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <div className="p-8">
//                   <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Dashboard</h1>
//                   <p className="text-gray-600">You are successfully logged in!</p>
//                 </div>
//               </ProtectedRoute>
//             }
//           />

//           {/* Redirect any unknown routes to home */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import "./App.css";
import LandingPage from "./sections/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LawSection from "./Pages/LawSection";
import About from "./Pages/About";
import Chatbot from "./Pages/Chatbot"; // <- Will call the backend API
import { useState } from "react";

// ✅ Example auth check (replace with real logic)
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// ✅ Protected Route Wrapper
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// ✅ Layout Wrapper to hide Navbar on login, signup, and chatbot pages
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/chatbot";

  return (
    <div className="w-full h-full">
      {!hideNavbar && <Navbar />}
      {children}
    </div>
  );
}

// Chatbot component that uses the backend API
function ChatbotPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL; // 🔑 from frontend .env

  const sendMessage = async () => {
    if (!message.trim()) return;
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      console.error("Error calling backend:", err);
      setReply("⚠️ Unable to connect to server");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Legal Clause Simplifier</h1>
      <textarea
        className="border p-3 w-full max-w-xl rounded-md"
        rows="5"
        placeholder="Enter your legal clause here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Ask Chatbot
      </button>
      {reply && (
        <div className="mt-6 max-w-xl w-full bg-white p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">AI Response:</h2>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/law-section" element={<LawSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<ChatbotPage />} />

          {/* Example Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Welcome to Dashboard
                  </h1>
                  <p className="text-gray-600">You are successfully logged in!</p>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
