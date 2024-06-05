import { PlusCircle } from 'lucide-react';
import React, { FC } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const NewGroupDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="ml-auto">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add group
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New group</DialogTitle>
          <DialogDescription>
            Click create group when you are done
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
            <Input
              id="name"
              placeholder="Micheal Jordan fun club"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="description"
              className="text-right"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="A group for all Micheal Jordan fans"
              className="col-span-3 resize-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="description"
              className="text-right"
            >
              Image
            </Label>
            <Input
              id="picture"
              type="file"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create group</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroupDialog;
