import { useAppDispatch, useAuth, useMounted, useTypedSelector } from '@hooks';
import { Modal } from '@primitives';
import { useEffect, useState } from 'react';
import { hideVerifyEmailModal } from 'store/modals/actions';
import { EnterCodeModal } from './enter-code/component';
import { EnterEmailModal } from './enter-email/component';
import { SuccessModal } from './success-verification/component';

const EmailVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { step } = useTypedSelector((state) => state.modals.verifyEmailModal);
  const dispatch = useAppDispatch();
  const { hasToken } = useAuth();
  const isMounted = useMounted();
  const { user } = useAuth();

  useEffect(() => {
    setIsVisible(true);
    window.onpopstate = () => {
      dispatch(hideVerifyEmailModal());
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(hideVerifyEmailModal());
  };

  const renderContent = (param) => {
    switch (param) {
      case 0:
        return <EnterEmailModal email={user.email} />;
      case 1:
        return <EnterCodeModal email={user.email} />;
      case 2:
        return <SuccessModal />;
      default:
        return <>{closeModal()}</>;
    }
  };

  const renderModal = () => (
    <Modal visible={isVisible}>{renderContent(step)}</Modal>
  );

  return <>{isMounted && hasToken && renderModal()}</>;
};

export default EmailVerificationModal;
