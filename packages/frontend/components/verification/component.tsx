import { useAppDispatch, useAuth, useMounted, useTypedSelector } from '@hooks';
import { Modal } from '@primitives';
import { useEffect, useState } from 'react';
import { hideVerifyModal } from 'store/verify/actions';
import EnterCodeModal from './enter-code/component';
import EnterPhoneModal from './enter-phone/component';
import SuccessModal from './success-verification/component';

const VerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { variant } = useTypedSelector((state) => state.verify);
  const dispatch = useAppDispatch();
  const { hasToken } = useAuth();
  const isMounted = useMounted();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    dispatch(hideVerifyModal());
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return <EnterPhoneModal />;
      case 1:
        return <EnterCodeModal />;
      case 2:
        return <SuccessModal />;
      default:
        return <>{closeModal()}</>;
    }
  };

  const renderModal = () => (
    <Modal visible={isVisible}>{renderSwitch(variant)}</Modal>
  );

  return <>{isMounted && hasToken && renderModal()}</>;
};

export { VerificationModal };
