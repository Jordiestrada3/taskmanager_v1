export type Event = {
  id: string;
  createdAt: Date;
  memberId: string | null;
  memberName: string;
  taskId: string | null;
  taskName: string;
  taskDescription: string;
  taskScore: number;
  correction: boolean;
};
