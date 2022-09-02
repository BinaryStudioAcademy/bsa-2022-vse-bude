import { useTypedSelector } from "@hooks";
import { lazy } from "react";

const VerificationModal = lazy(() =>
  import('@components/verification')
    .then(({ VerificationModal }) => ({ default: VerificationModal })),
);

export const Modals = () => {
    const { isVerifyPhoneModalOpen } = useTypedSelector((state) => state.modals);

    return (
        <>
            {isVerifyPhoneModalOpen && <VerificationModal />}
        </>
    );
};
