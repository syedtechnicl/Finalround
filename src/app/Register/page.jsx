// "use client";
// // mui
// import { Container, TextField, Typography } from "@mui/material";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import React, { useState } from "react";
// import { app } from "../Firebase/firebase";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const Page = () => {
//   const [email, setEmail] = useState(""); // Fixed `setemail` to `setEmail`
//   const [password, setPassword] = useState(""); // Fixed `setpassword` to `setPassword`
//   const router = useRouter();

//   // auth
//   const auth = getAuth(app);

//   const Register = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         alert("Account created successfully");
//         router.push("../Login");
//       })
//       .catch((error) => {
//         alert(`Error: ${error.message}`);
//       });
//   };

//   const googleprovider = new GoogleAuthProvider();
//   const Googles = () => {
//     signInWithPopup(auth, googleprovider);
//     alert("sign in success");
//     router.push("../Cvm.jsx");
//   };

//   return (
//     <div>
//       <center>
//         <div
//           style={{
//             border: "1px solid black",
//             marginTop: "60px",
//             borderRadius: "20px",
//             width: "900px",
//           }}
//         >
//           <Container sx={{ marginTop: "50px" }} maxWidth="sm">
//             <Typography variant="h4" sx={{ textAlign: "center" }}>
//               Register
//             </Typography>
//             <br />
//             <small style={{ justifyContent: "center" }}>
//               <center> Please provide your name and email address</center>
//             </small>
//             <TextField
//               type="email"
//               id="name-input"
//               label="Enter Your Email"
//               variant="standard"
//               fullWidth
//               sx={{ padding: "10px" }}
//               onChange={(event) => {
//                 setEmail(event.currentTarget.value); // Updated to use `setEmail`
//               }}
//               value={email}
//             />
//             <br />
//             <TextField
//               type="password"
//               id="email-input"
//               label="Enter Your Password"
//               variant="standard"
//               fullWidth
//               sx={{ padding: "10px" }}
//               onChange={(event) => {
//                 setPassword(event.currentTarget.value); // Updated to use `setPassword`
//               }}
//               value={password}
//             />
//             <br />
//             <br />
//             <h4 style={{ opacity: 0.7 }}>
//               <center>__________ Or Sign In With __________</center>
//               <br />
//               <center>
//                 Do You Have An Account? <Link href="../Login">Login</Link>
//               </center>
//             </h4>
//             <button
//               onClick={Register}
//               style={{
//                 padding: "10px 20px",
//                 marginBottom: "10px",
//                 backgroundColor: "#4285F4",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//               }}
//               aria-label="Sign in with Google"
//             >
//               Register
//             </button>
//             <center>
//               <em
//                 style={{
//                   fontStyle: "italic",
//                   paddingTop: "10px",
//                 }}
//               >
//                 By registering, you acknowledge and agree to our
//               </em>
//               <br />
//               <br />
//             </center>
//           </Container>
//         </div>
//       </center>
//     </div>
//   );
// };

// export default Page;

// gpt
"use client";
// mui
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { app } from "../Firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // auth
  const auth = getAuth(app);

  const Register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account created successfully");
        router.push("../Login");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        alert("Google Sign-in successful");
        router.push("../Cvm"); // Navigate only after successful login
      })
      .catch((err) => {
        console.error(err);
        alert(`Error: ${err.message}`);
      });
  };

  return (
    <div>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "20px",
          maxWidth: 900,
          margin: "60px auto",
          padding: 3,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 3 }}
          >
            Register
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            Please provide your name and email address
          </Typography>

          <TextField
            type="email"
            label="Enter Your Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <TextField
            type="password"
            label="Enter Your Password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Register}
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#4285F4",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#357ae8",
                  },
                }}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={loginWithGoogle}
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "#4285F4",
                  color: "#4285F4",
                  padding: "10px",
                  borderRadius: "5px",
                  "&:hover": {
                    borderColor: "#357ae8",
                    color: "#357ae8",
                  },
                }}
              >
                Sign in with Google
              </Button>
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 3,
              opacity: 0.7,
            }}
          >
            <span>__________ Or Sign In With __________</span>
            <br />
            <br />
            <Link href="../Login">
              <Typography
                variant="body2"
                sx={{ color: "#4285F4", fontWeight: "bold" }}
              >
                Do You Have An Account? Login
              </Typography>
            </Link>
          </Typography>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Typography variant="caption" sx={{ fontStyle: "italic" }}>
              By registering, you acknowledge and agree to our Terms and
              Conditions.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Page;
