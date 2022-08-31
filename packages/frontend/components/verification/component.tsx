import { useAppDispatch, useTypedSelector } from '@hooks';
import { Modal } from '@primitives';
import { useEffect, useState } from 'react';
import { hideVerifyModal } from 'store/verify/actions';
import EnterCodeModal from './enter-code/component';
import EnterPhoneModal from './enter-phone/component';
import SuccessModal from './ssuccess-verification/component';

export default function VerificationModal() {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useAppDispatch();
    const { variant } = useTypedSelector(state => state.verify);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const closeModal = () => {
        dispatch(hideVerifyModal());
    };

    return (
        <Modal visible={isVisible}>
        {variant == 0
        ?<EnterPhoneModal></EnterPhoneModal>
        : <>
            {variant == 1
                ? <EnterCodeModal></EnterCodeModal>
                :<>
                    {variant == 2
                    ? <SuccessModal></SuccessModal>
                    :<>{closeModal()}</>
                    }
                </> 
            }
        </>
        }
        </Modal>
    );
}
