// import { getDatabase, ref as dbRef, set, onValue } from "firebase/database";
//
// import { v4 as uuidv4 } from "uuid";
// import {db, storage } from "./firebase";
// import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
//
// export function submit(file, blog) {
//     const storageRef = ref(storage, "blogs/" + uuidv4());
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log("Upload is " + progress + "% done");
//             switch (snapshot.state) {
//                 case "paused":
//                     console.log("Upload is paused");
//                     break;
//                 case "running":
//                     console.log("Upload is running");
//                     break;
//             }
//         },
//         (error) => {
//             console.log(error);
//         },
//         () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 blog.file = downloadURL;
//                 writePostData(blog);
//             });
//         }
//     );
// }
//
// function writePostData(blog) {
//     const id = uuidv4();
//     const { title, subtitle, description, content, file } = blog;
//     set(dbRef(db, "blogs/" + id), {
//         id,
//         title,
//         subtitle,
//         description,
//         content,
//         file,
//     })
//         .then((r) => {
//             console.log(r);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }
//
// export async function getBlogs() {
//     const blogsRef = dbRef(db, "blogs/");
//     return new Promise((resolve, reject) => {
//         onValue(
//             blogsRef,
//             (snapshot) => {
//                 const data = snapshot.val();
//                 resolve(data);
//             },
//             {
//                 onlyOnce: true, // unsubscribe after first snapshot
//             },
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
// }
//
// export default {
//     analytics,
//     db,
//     dbRef,
//     getBlogs,
// };