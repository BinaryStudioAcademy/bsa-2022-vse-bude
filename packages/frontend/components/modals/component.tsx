import { useTypedSelector } from '@hooks';
import { useWindowScroll } from 'hooks/use-window-scroll';
import dynamic from 'next/dynamic';

const VerificationModal = dynamic(
  () => import('@components/verification/component'),
);

export const Modals = () => {
    const [blockScroll, allowScroll] = useWindowScroll();

    const { isModalOpen } = useTypedSelector(
      (state) => state.modals.verifyPhoneModal,
    );

    if(isModalOpen) blockScroll();
    else allowScroll();

    return <>{isModalOpen && <VerificationModal />}</>;
};
