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
import Filter from '@/components/admin/reports/Filter';
import Report from '@/components/admin/reports/Report';

const AdminReportsPage: NextPage = () => {
  return (
    <>
      <Card
        x-chunk="dashboard-06-chunk-0"
        className="mt-2"
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Reports</CardTitle>
            <Filter />
          </div>
          <CardDescription>
            This page allows administrators to review, respond to, and resolve
            user reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Content</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Type</TableHead>
                <TableHead className="hidden md:table-cell">
                  Reported at
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
              <Report />
              <Report />
              <Report />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminReportsPage;
