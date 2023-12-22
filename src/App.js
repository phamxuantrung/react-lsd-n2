import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU91x_Yk9-p33UHvn2RRRamQJK0cgh6Do",
  authDomain: "lichsudang-n2.firebaseapp.com",
  projectId: "lichsudang-n2",
  storageBucket: "lichsudang-n2.appspot.com",
  messagingSenderId: "976966586409",
  appId: "1:976966586409:web:b19ce284cc72af7990cc38",
  measurementId: "G-Y8HC0VK239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route?.layout ? route.layout : Fragment;
                        const Page = route.element;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
