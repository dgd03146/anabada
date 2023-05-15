import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/loading';

const PostsContainer = dynamic(() => import('../../components/posts'), {
  loading: () => <LoadingSpinner />
});

const Posts = () => {
  return <PostsContainer />;
};

export default Posts;
