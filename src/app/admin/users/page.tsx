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
import Filter from '@/components/admin/posts/Filter';
import User from '@/components/admin/users/User';

const AdminUsersPage: NextPage = () => {
  return (
    <>
      <Card
        x-chunk="dashboard-06-chunk-0"
        className="mt-2"
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Users</CardTitle>
            <Filter />
          </div>
          <CardDescription>
            This page allows administrators to manage user accounts, viewing,
            editing, activating, or deactivating users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Full name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">E-mail</TableHead>
                <TableHead className="hidden md:table-cell">
                  Date of birth
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <User />
              <User />
              <User />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminUsersPage;
