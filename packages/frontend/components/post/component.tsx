interface PostProps {
  create: string;
}

export const Post = ({ create } : PostProps) => (
    <div>{create} New post</div>
  );
