import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { onValue, ref as dbRef, set } from "firebase/database";
import { db, storage } from "@/services/firebase";

export function submit(file, about) {
  const storageRef = ref(storage, "about/"+ 0);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        about.file = downloadURL;
        writePostData(about);
      });
    }
  );
}
export function writePostData(about) {
  const id = uuidv4();
  const { title, subtitle, description, content, file } = about;
  set(dbRef(db, "about/"), {
    id,
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

export async function getAbout() {
  const aboutRef = dbRef(db, "about/");
  return new Promise((resolve, reject) => {
    onValue(
      aboutRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      {
        onlyOnce: true,
      },
      (error) => {
        reject(error);
      }
    );
  });
}
