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
  const [adminVerify, setAdminVerify] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState(null);
  const [department, setDepartment] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userRole, setUserRole] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    fetch("http://https://afternoon-brook-80659.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    fetch("http://https://afternoon-brook-80659.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  useEffect(() => {
    fetch("http://https://afternoon-brook-80659.herokuapp.com/department")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
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
          fetch("http://https://afternoon-brook-80659.herokuapp.com/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email, role: "user" }),
          });
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
        fetch("http://https://afternoon-brook-80659.herokuapp.com/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: result.user.email, role: "user" }),
        });
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
      setUserRole(null);
    });
  };

  useEffect(() => {
    fetch(
      `http://https://afternoon-brook-80659.herokuapp.com/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data.role);
        if (data.role === "admin") {
          setAdminVerify(false);
        } else {
          setAdminVerify(false);
        }
      });
  }, [user]);
  console.log(userRole);

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
    department,
    userRole,
    adminVerify,
  };
};
export default useFirebase;
