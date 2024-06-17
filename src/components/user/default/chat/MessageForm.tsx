import { Mic, Paperclip, Send } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const MessageForm: FC = () => {
  return (
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
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
  );
};

export default MessageForm;