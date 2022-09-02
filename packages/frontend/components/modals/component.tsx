import { useTypedSelector } from '@hooks';
import dynamic from 'next/dynamic';

const VerificationModal = dynamic(() => import('@components/verification/component'));

export const Modals = () => {
  const { isModalOpen } = useTypedSelector((state) => state.modals.verifyPhoneModal);

  return <>{isModalOpen && <VerificationModal />}</>;
};
