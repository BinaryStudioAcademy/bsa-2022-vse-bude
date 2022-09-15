import { useTypedSelector } from '@hooks';
import dynamic from 'next/dynamic';

const VerificationModal = dynamic(
  () => import('@components/verification/component'),
);

const PostTypeModal = dynamic(
  () => import('@components/make-a-post/type-of-post/component'),
);

export const Modals = () => {
  const isPhoneVerificationModalOpen = useTypedSelector(
    (state) => state.modals.verifyPhoneModal.isModalOpen,
  );
  const isCreatePostModalOpen = useTypedSelector(
    (state) => state.modals.isCreatePostModalOpen,
  );

  return (
    <>
      {isPhoneVerificationModalOpen && <VerificationModal />}
      {isCreatePostModalOpen && <PostTypeModal />}
    </>
  );
};
