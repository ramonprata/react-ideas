import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'shared/redux/reduxStore';

export const useRedux = <T>(slice: keyof RootState) => {
  const dispatch = useDispatch();

  const sliceState = useSelector((state: RootState) => state[slice]) as unknown as T;
  return {
    dispatch,
    sliceState,
  };
};
