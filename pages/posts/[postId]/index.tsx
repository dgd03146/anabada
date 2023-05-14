import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/loading';

const PostContainer = dynamic(() => import('../../../components/posts/post'), {
  loading: () => <LoadingSpinner />
});

const Post = () => {
  return <PostContainer />;
};

export default Post;
