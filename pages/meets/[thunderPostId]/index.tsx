import LoadingSpinner from '../../../components/loading';
import MeetDetail from '../../../components/meets/meet/detail';
import dynamic from 'next/dynamic';

const MeetContainer = dynamic(
  () => import('../../../components/meets/meet/detail'),
  {
    loading: () => <LoadingSpinner />
  }
);

const Meet = () => {
  return <MeetContainer />;
};

export default Meet;
