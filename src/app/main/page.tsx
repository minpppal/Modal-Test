"use client";
import React from "react";
import CommentReportModal from "@/app/components/commentReportModal/CommentReportModal";
import { MdOutlineReport } from "react-icons/md";
import styles from "@/app/main/page.module.scss";
import { useModal } from "@/app/store/ModalContext";
import { ModalProvider } from "@/app/store/ModalContext";
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Page = () => {
  const { isModalOpen, openModal, closeModal }: ModalContextType = useModal();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.commentBox}>
        <div className={styles.commentProfileImage}></div>
        <div className={styles.comment}></div>
        <div className={styles.commentReport} onClick={openModal}>
          <MdOutlineReport />
        </div>
        <ModalProvider>
          {isModalOpen ? <CommentReportModal closeModal={closeModal} /> : null}
        </ModalProvider>
      </div>
    </div>
  );
};

export default Page;
