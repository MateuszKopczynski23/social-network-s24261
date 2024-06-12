import { EllipsisVertical, Mic, Paperclip, Send } from 'lucide-react';
import { FC } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Chat: FC = () => {
  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-2 md:p-4 lg:col-span-2">
      <Card>
        <CardContent className="px-4 py-3">
          <div className="flex items-center gap-x-3 rounded-lg text-left text-sm">
            <div className="relative h-10 w-10">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
                  alt="Avatar"
                  className="object-cover"
                />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border bg-green-500" />
            </div>

            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-[15px] font-semibold md:text-lg">
                      Marco Milicić
                    </div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                  <EllipsisVertical className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex-1" />
      <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Label
          htmlFor="message"
          className="sr-only"
        >
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <Paperclip className="size-4" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Attach File</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <Mic className="size-4" />
                <span className="sr-only">Use Microphone</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
          <Button
            type="submit"
            size="sm"
            className="ml-auto gap-1.5"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
