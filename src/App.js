import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal";
import { toast } from "react-toastify";
import fetchPicture from "../src/components/servece/photo-api";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function App() {
  const [imgName, setImgName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(null);
  const [page, setPage] = useState(1);
  const [imgCards, setImgCards] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const toggleModal = (id) => {
    setShowModal(!showModal);
    setSrc(id);
  };

  const onSubmit = (imgName) => {
    setImgName(imgName);
    setPage(1);
    setImgCards([]);
    setError(null);
  };

  useEffect(() => {
    if (!imgName) {
      return;
    }

    const fetchImgCOllection = () => {
      setStatus(Status.PENDING);

      fetchPicture({ searchQuery: imgName, page })
        .then(({ hits }) => {
          if (hits.length === 0) {
            setStatus(Status.IDLE);
            return toast.error("Не таких картинок !!!");
          }
          setImgCards((state) => [...state, ...hits]);
          setStatus(Status.RESOLVED);
        })
        .catch((error) => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    };
    fetchImgCOllection();
  }, [imgName, page]);

  return (
    <div className="App">
      {showModal && <Modal onClose={toggleModal} imgInfo={src}></Modal>}
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        imgCards={imgCards}
        error={error}
        status={status}
        onCLickImg={toggleModal}
        onBtnClick={() => setPage((state) => state + 1)}
      />
    </div>
  );
}

export default App;
