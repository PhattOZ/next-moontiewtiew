import { useRef, useState } from "react";
import Image from "next/image";
import { upload } from "../../lib/firebase_storage";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/react";

function Grid({ bgColor, syncFile, index }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const [file] = e.target.files;

    if (file) {
      setFile(file);
      syncFile(index, file);
    }
  };

  const uploadPhoto = () => {
    const filename = encodeURIComponent(file.name);
    upload(filename, file);
  };

  return (
    <>
      {file ? (
        <div className={`bg-${bgColor}-200 p-4`}>
          <Image src={URL.createObjectURL(file)} width={200} height={200} />
          <div
            className="ring-1 ring-inset ring-purple-600 bg-pink-800 text-white"
            onClick={uploadPhoto}
          >
            upload to firebase storage
          </div>
        </div>
      ) : (
        <div className={`bg-${bgColor}-200 p-4`}>
          <div
            onClick={() => {
              inputRef.current.click();
            }}
          >
            Click to upload
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/png, image/jpeg"
            className="absolute opacity-0"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}

function ProgressBox({ message, progress, maxProgress }) {
  return (
    <div className="absolute bg-white bg-opacity-80 flex justify-center items-center">
      <div className="text-center">
        <div className="font-semibold">{message}</div>
        <div>
          {progress} out of {maxProgress} files uploaded
        </div>
      </div>
    </div>
  );
}

export default function ImageUploadGrids() {
  const [files, setFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState();
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/profile");
    },
  });

  if (status === "loading") {
    return "Loading...";
  }

  const handleSyncFile = (index, file) => {
    setFiles((prevFilesArray) => {
      const newFilesArray = [...prevFilesArray];
      newFilesArray[index] = file;
      return newFilesArray;
    });
  };

  const uploadBatch = () => {
    setUploadProgress(0);

    files.map((file, index) => {
      if (file) {
        const filename = encodeURIComponent(file.name);
        const url = upload(filename, file);
        console.log(index + "image url: " + url);
        setUploadProgress((prevProgress) => prevProgress + 1);
      }
    });
  };

  return (
    <>
      {files && (
        <ProgressBox
          message={uploadMessage}
          progress={uploadProgress}
          maxProgress={files.length}
        />
      )}
      <div className="grid grid-cols-2">
        <Grid index={0} bgColor="yellow" syncFile={handleSyncFile} />
        <Grid index={1} bgColor="green" syncFile={handleSyncFile} />
        <Grid index={2} bgColor="purple" syncFile={handleSyncFile} />
        <Grid index={3} bgColor="pink" syncFile={handleSyncFile} />
      </div>
      <div>
        <button
          onClick={() => {
            if (files) {
              uploadBatch();
            } else {
              console.log("upload file first");
            }
          }}
        >
          upload all
        </button>
      </div>
    </>
  );
}
