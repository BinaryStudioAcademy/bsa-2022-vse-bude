import { useDispatch } from 'react-redux';
import { AppDispatch } from '~/common/types/types';

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
