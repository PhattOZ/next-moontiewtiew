import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWtnchSCBeI2UQnHJ3DYuW5B7spiv1Wqw",
  authDomain: "moontiewtiew-6dcc7.firebaseapp.com",
  projectId: "moontiewtiew-6dcc7",
  storageBucket: "moontiewtiew-6dcc7.appspot.com",
  messagingSenderId: "924083623358",
  appId: "1:924083623358:web:a5a7374ba532cad0db95ef",
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

export default storage;

export const upload = (filename, file) => {
  const fullname = new Date().getTime().toString() + "-" + filename;
  const storageRef = ref(storage, `/${fullname}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    (error) => {
      console.log("errrrr!!!!!!");
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        return downloadURL;
      });
    }
  );
};
