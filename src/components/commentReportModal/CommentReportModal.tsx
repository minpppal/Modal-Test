"use client";
import React, { useContext } from "react";
import styles from "@/components/commentReportModal/CommentReportModal.module.scss";
import { ModalContext } from "@/store/ModalContext";
import { useOnClickOutside } from "@modern-kit/react";

const CommentReportModal = () => {
  const modalState = useContext(ModalContext);
  const isModalOpen = modalState?.isModalOpen;
  const onClose = modalState?.closeModal;

  const { ref } = useOnClickOutside<HTMLDivElement>(() => {
    onClose?.();
  });

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={styles.reportBox} ref={ref}>
      <div className={styles.reportTitle}>
        <p className={styles.reportRecomfirm}>이 댓글을 신고하시겠습니까?</p>
        <p className={styles.reportText}>
          신속한 제재를 위해 정확한 사유를 입력해주시기 바랍니다.
        </p>
      </div>
      <div className={styles.reportContentBox}>
        <textarea
          className={styles.reportContent}
          placeholder="신고 사유를 입력해주세요."
        />
      </div>
      <div className={styles.reportButtonBox}>
        <button className={styles.reportButton} onClick={onClose}>
          신고하기
        </button>
      </div>
    </div>
  );
};

export default CommentReportModal;
