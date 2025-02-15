import { createPost } from '@/actions/posts';
import PostFormPage from '@/components/post-form';

export default function NewPostPage() { 
  return <PostFormPage action={createPost}/>;
}
