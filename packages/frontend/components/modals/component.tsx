import { useTypedSelector } from '@hooks';
import dynamic from 'next/dynamic';

const PhoneVerificationModal = dynamic(
  () => import('@components/phone-verification/component'),
);

const EmailVerificationModal = dynamic(
  () => import('@components/email-verification/component'),
);

const PostTypeModal = dynamic(
  () => import('@components/make-a-post/type-of-post/component'),
);

export const Modals = () => {
  const isPhoneVerificationModalOpen = useTypedSelector(
    (state) => state.modals.verifyPhoneModal.isModalOpen,
  );
  const isEmailVerificationModalOpen = useTypedSelector(
    (state) => state.modals.verifyEmailModal.isModalOpen,
  );
  const isCreatePostModalOpen = useTypedSelector(
    (state) => state.modals.isCreatePostModalOpen,
  );

  return (
    <>
      {isPhoneVerificationModalOpen && <PhoneVerificationModal />}
      {isEmailVerificationModalOpen && <EmailVerificationModal />}
      {isCreatePostModalOpen && <PostTypeModal />}
    </>
  );
};
