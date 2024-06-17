export interface Group {
  id: string;
  userId: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  imageUrl?: string;
}
