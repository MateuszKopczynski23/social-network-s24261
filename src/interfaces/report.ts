export interface Report {
  id: string;
  userId: string;
  commentId?: string;
  postId?: string;
  content: string;
  type: ReportType;
  reportedAt: string;
  createdAt: string;
}

export type ReportType = 'Comment' | 'Post';
