import store from "@/store"; // Import the Vuex store instance

import { ref, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { onValue, ref as dbRef, set, remove } from "firebase/database";
import { db, storage } from "@/services/firebase";
import axios from "axios";
import router from "@/router";

export async function submit(blog) {
  await store.dispatch("setLoading", true);
  const formData = new FormData();
  formData.append("id", blog.id);
  formData.append("title", blog.title);
  formData.append("subtitle", blog.subtitle);
  formData.append("description", blog.description);
  formData.append("content", blog.content);
  formData.append("file", blog.file);
  try {
    const response = await axios.post("http://localhost:3000/blog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Blog saved:", response.data);
    await router.replace({ path: "/admin/blogs" });
  } catch (error) {
    console.error("Error uploading blog:", error);
  }
  await store.dispatch("setLoading", false);
}

export async function deleteBlog(id, onSuccess, onFailure) {
  await store.dispatch("setLoading", true);
  try {
    const response = await axios.delete(`http://localhost:3000/blog/${id}`);
    console.log("Blog deleted:", response.data);
    onSuccess();
  } catch (error) {
    console.error("Error deleting blog:", error);
    onFailure(error);
  }
  await store.dispatch("setLoading", false);
}

export function writePostData(blog) {
  const id = uuidv4();
  const { title, subtitle, description, content, file } = blog;
  set(dbRef(db, "blogs/" + id), {
    id: id,
    title,
    subtitle,
    description,
    content,
    file,
  })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getBlogs() {
  const blogsRef = dbRef(db, "blogs/");
  return new Promise((resolve, reject) => {
    onValue(
      blogsRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      {
        onlyOnce: true, // unsubscribe after first snapshot
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export function removeBlogData(blogId, fileUrl) {
  // Delete the file from Firebase Storage
  const storageRef = ref(storage, fileUrl);
  deleteObject(storageRef)
    .then(() => {
      console.log("File deleted successfully from Firebase Storage");
    })
    .catch((error) => {
      console.error("Error deleting file from Firebase Storage:", error);
    });

  // Remove the blog data from the Firebase Realtime Database
  const blogRef = dbRef(db, "blogs/" + blogId);
  remove(blogRef)
    .then(() => {
      console.log(
        "Blog data removed successfully from Firebase Realtime Database"
      );
    })
    .catch((error) => {
      console.error(
        "Error removing blog data from Firebase Realtime Database:",
        error
      );
    });
}
