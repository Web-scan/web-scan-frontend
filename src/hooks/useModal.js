import { useState } from "react";
import Modal from "../components/shared/Modal";

export function useModal(header) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleContent = (content) => {
    setContent(content);
  };

  const CustomModal = () => {
    return (
      <Modal
        isModalOpen={isModalOpen}
        handleClick={() => setIsModalOpen(false)}
        header={header}
        content={content}
      />
    );
  };

  return [CustomModal, openModal, handleContent];
}
