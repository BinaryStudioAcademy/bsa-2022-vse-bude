import { useTypedSelector } from '@hooks';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const VerificationModal = dynamic(
  () => import('@components/verification/component'),
);

export const Modals = () => {
  const { isModalOpen } = useTypedSelector(
    (state) => state.modals.verifyPhoneModal,
  );

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, [isModalOpen]);

  return <>{isModalOpen && <VerificationModal />}</>;
};
