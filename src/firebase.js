import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
import {} from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0BFE1PDBpcnji-MSO8DY1OLa8aJYsOE",
  authDomain: "task-project-d94c2.firebaseapp.com",
  projectId: "task-project-d94c2",
  storageBucket: "task-project-d94c2.appspot.com",
  messagingSenderId: "351966177274",
  appId: "1:351966177274:web:eae2d1b80e119ca8ac2643",
  measurementId: "G-3LY8MXZHL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addTask = (task) => {
  return addDoc(collection(db, "tasks"), {
    ...task,
    createdAt: Date(),
  });
};
export const getTasks = async () => {
  const docs = await getDocs(collection(db, "tasks"));
  const tasks = [];
  docs.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  return tasks;
};
