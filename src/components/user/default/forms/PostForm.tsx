import { Image as Photo, Send, Smile } from 'lucide-react';
import { FC } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const PostForm: FC = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex w-full justify-between gap-x-3">
          <Avatar className="hidden h-10 w-10 lg:flex">
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
              className="object-cover"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Textarea
            className="min-h-20 flex-1 resize-none rounded-sm border-none pl-1 pt-0.5 lg:min-h-0"
            placeholder="Type something interesting..."
          />

          <Button
            className="lg:hidden"
            type="submit"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/*<div className="relative mt-4 h-60 w-full 2xl:h-96">*/}
        {/*  <Image*/}
        {/*    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/}
        {/*    alt="post"*/}
        {/*    className="rounded-bl-2xl rounded-tr-2xl object-cover"*/}
        {/*    fill*/}
        {/*  />*/}
        {/*</div>*/}
      </CardContent>
      <CardFooter className="flex flex-col items-start pb-4">
        <Separator className="mb-3 mt-1 px-3" />
        <div className="grid w-full grid-cols-2">
          <Label
            htmlFor="postFormPhoto"
            className="flex items-center justify-center gap-x-2 text-sm"
          >
            <Input
              id="postFormPhoto"
              type="file"
              className="hidden"
            />
            <Photo className="h-5 w-5 text-primary/60" /> Photo/video
          </Label>
          <div className="flex items-center justify-center gap-x-2 text-sm">
            <Smile className="h-5 w-5 text-primary/60" /> Felling/activity
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
