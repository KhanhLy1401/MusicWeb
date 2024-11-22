import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx"
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
import { axiosInstance } from "./lib/axios.ts";
import { Token } from "@clerk/nextjs/server";
function App() {
// //token =>
//   const getSomeData = async () => {
//     const res = await axiosInstance.get("/user", {
//       headers: {
//         "Authorization": `Beared ${token}`
//       }
//     })
//     console.log(res)
//   }




  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth-callback" element={<AuthCallbackPage />}/>
      </Routes>
    </>
  );
}

export default App;
