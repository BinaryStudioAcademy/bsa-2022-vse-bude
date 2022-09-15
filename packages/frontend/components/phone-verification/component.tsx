import { useAppDispatch, useAuth, useMounted, useTypedSelector } from '@hooks';
import { Modal } from '@primitives';
import { useEffect, useState } from 'react';
import { hideVerifyPhoneModal } from 'store/modals/actions';
import { EnterCodeModal } from './enter-code/component';
import { EnterPhoneModal } from './enter-phone/component';
import { SuccessModal } from './success-verification/component';

const PhoneVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { step } = useTypedSelector((state) => state.modals.verifyPhoneModal);
  const dispatch = useAppDispatch();
  const { hasToken } = useAuth();
  const isMounted = useMounted();
  const { user } = useAuth();

  useEffect(() => {
    setIsVisible(true);
    window.onpopstate = () => {
      dispatch(hideVerifyPhoneModal());
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(hideVerifyPhoneModal());
  };

  const renderContent = (param) => {
    switch (param) {
      case 0:
        return <EnterPhoneModal phone={user.phone} />;
      case 1:
        return <EnterCodeModal phone={user.phone} />;
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

export default PhoneVerificationModal;
