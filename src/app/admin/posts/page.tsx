import { NextPage } from 'next';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Post from '@/components/admin/posts/Post';
import Filter from '@/components/admin/posts/Filter';

const AdminPostsPage: NextPage = () => {
  return (
    <>
      <Card
        x-chunk="dashboard-06-chunk-0"
        className="mt-2"
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Posts</CardTitle>
            <Filter />
          </div>
          <CardDescription>
            This page allows administrators to view, edit, or delete user posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Username</TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Post />
              <Post />
              <Post />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminPostsPage;
