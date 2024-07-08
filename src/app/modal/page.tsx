"use client";
import React, { useContext } from "react";
import CommentReportModal from "@/components/commentReportModal/CommentReportModal";
import { MdOutlineReport } from "react-icons/md";
import styles from "@/app/main/page.module.scss";
import { ModalContext } from "@/store/ModalContext";

const Page = () => {
  const modalState = useContext(ModalContext);
  const isModalOpen = modalState?.isModalOpen;
  const onOpen = modalState?.openModal;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.commentBox}>
        <div className={styles.commentProfileImage}></div>
        <div className={styles.comment}></div>
        <div className={styles.commentReport}>
          <MdOutlineReport onClick={onOpen} />
        </div>
        {isModalOpen ? <CommentReportModal /> : null}
      </div>
    </div>
  );
};

export default Page;
