import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref as dbRef } from "firebase/database";

import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQO-8YfigphOgAwI6H3vjkhhAaKjW02UY",
  authDomain: "blog-law.firebaseapp.com",
  projectId: "blog-law",
  storageBucket: "blog-law.appspot.com",
  messagingSenderId: "349626940866",
  appId: "1:349626940866:web:a42eca4bafa8b9f9a9ea5b",
  measurementId: "G-V3B6B3510C",
  databaseURL:
    "https://blog-law-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage();

// export function submit(file, blog) {
//   const storageRef = ref(storage, "blogs/" + uuidv4());
//   const uploadTask = uploadBytesResumable(storageRef, file);
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//       switch (snapshot.state) {
//         case "paused":
//           console.log("Upload is paused");
//           break;
//         case "running":
//           console.log("Upload is running");
//           break;
//       }
//     },
//     (error) => {
//       console.log(error);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         blog.file = downloadURL;
//         writePostData(blog);
//       });
//     }
//   );
// }
// export function writePostData(blog) {
//   const id = uuidv4();
//   const { title, subtitle, description, content, file } = blog;
//   set(dbRef(db, "blogs/" + id), {
//     id,
//     title,
//     subtitle,
//     description,
//     content,
//     file,
//   })
//     .then((r) => {
//       console.log(r);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
//
// export async function getBlogs() {
//   const blogsRef = dbRef(db, "blogs/");
//   return new Promise((resolve, reject) => {
//     onValue(
//       blogsRef,
//       (snapshot) => {
//         const data = snapshot.val();
//         resolve(data);
//       },
//       {
//         onlyOnce: true, // unsubscribe after first snapshot
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
// }

export default {
  analytics,
  db,
  dbRef,
};
