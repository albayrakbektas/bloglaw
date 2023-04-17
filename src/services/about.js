import store from "@/store"; // Import the Vuex store instance

import { ref, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { onValue, ref as dbRef, set, remove } from "firebase/database";
import { db, storage } from "@/services/firebase";
import axios from "axios";
import router from "@/router";

export async function submit(about) {
  await store.dispatch("setLoading", true);
  const formData = new FormData();
  formData.append("id", about.id);
  formData.append("title", about.title);
  formData.append("subtitle", about.subtitle);
  formData.append("description", about.description);
  formData.append("content", about.content);
  formData.append("file", about.file);
  try {
    const response = await axios.post("http://localhost:3000/about", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("About saved:", response.data);
    await router.replace({ path: "/admin/about" });
  } catch (error) {
    console.error("Error uploading about:", error);
  }
  await store.dispatch("setLoading", false);
}

export async function deleteabout(id, onSuccess, onFailure) {
  await store.dispatch("setLoading", true);
  try {
    const response = await axios.delete(`http://localhost:3000/about/${id}`);
    console.log("About deleted:", response.data);
    onSuccess();
  } catch (error) {
    console.error("Error deleting about:", error);
    onFailure(error);
  }
  await store.dispatch("setLoading", false);
}

export function writePostData(about) {
  const id = uuidv4();
  const { title, subtitle, description, content, file } = about;
  set(dbRef(db, "about/" + id), {
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

export async function getabouts() {
  const aboutRef = dbRef(db, "about/");
  return new Promise((resolve, reject) => {
    onValue(
      aboutRef,
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

export function removeAboutData(aboutId, fileUrl) {
  // Delete the file from Firebase Storage
  const storageRef = ref(storage, fileUrl);
  deleteObject(storageRef)
    .then(() => {
      console.log("File deleted successfully from Firebase Storage");
    })
    .catch((error) => {
      console.error("Error deleting file from Firebase Storage:", error);
    });

  // Remove the about data from the Firebase Realtime Database
  const aboutRef = dbRef(db, "about/" + aboutId);
  remove(aboutRef)
    .then(() => {
      console.log(
        "About data removed successfully from Firebase Realtime Database"
      );
    })
    .catch((error) => {
      console.error(
        "Error removing about data from Firebase Realtime Database:",
        error
      );
    });
}
