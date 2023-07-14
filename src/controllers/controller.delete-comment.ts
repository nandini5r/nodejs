import { Comment } from "../model/comments.model";
export const Delete_comments = async (req:any, res:any) => {
    const commentId = req.params.id;
  
    try {
      const comment = await Comment.findByPk(commentId);
  
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      await comment.destroy();
  
      return res.status(204).end(); // No content
    } catch (error) {
      console.error('Error deleting comment:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

