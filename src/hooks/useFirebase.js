import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { InitializeFirebase } from "../firebase/firebase.init";
InitializeFirebase();
const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    fetch("./data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const registerUser = () => {
    const regex = /^\S+@\S+\.\S+$/;

    if (!regex.test(email)) {
      return setError("Please try again with a valid email");
    } else if (pass.length < 6) {
      return setError("Please put a password bigger then 5 character");
    } else {
      setError("");
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          setError("Successfully registered, You can login now !");
          signOut(auth);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const loginUsingEmailPass = () => {
    const regex = /^\S+@\S+\.\S+$/;

    if (!regex.test(email)) {
      return setError("Please try again with a valid email");
    } else if (pass.length < 6) {
      return setError("Please put a password bigger then 5 character");
    } else {
      setError("");
      signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return {
    services,
    error,
    user,
    googleSignIn,
    logOut,
    doctors,
    setEmail,
    setPass,
    registerUser,
    isLoading,
    loginUsingEmailPass,
  };
};
export default useFirebase;
