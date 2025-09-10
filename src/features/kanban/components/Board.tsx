import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  ChevronRight,
  ClockIcon,
  TrashIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface IBoardCardProps {
  id: string;
  status: string;
  title: string;
  startDate: string;
  endDate: string;
  avatar: string;
  owner: string;
  role: string;
}

const statusConfig: Record<string, { icon: React.ElementType; color: string }> =
  {
    "Over Time": { icon: AlertTriangleIcon, color: "destructive" },
    Completed: { icon: CheckCircleIcon, color: "green" },
    "In Progress": { icon: ClockIcon, color: "blue" },
    Upcoming: { icon: AlertTriangleIcon, color: "orange" },
    Draff: { icon: TrashIcon, color: "gray" },
  };

const BoardCard = ({
  id,
  status,
  title,
  startDate,
  endDate,
  avatar,
  owner,
  role,
}: IBoardCardProps) => {
  const { icon: StatusIcon, color } = statusConfig[status] || {};

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="flex items-center text-gray-500">
          <span className="text-base font-bold text-gray-800">#{id}</span>
          <Separator orientation="vertical" className="h-4 mx-2" />
          <div className="flex-center">
            {/* <AlertTriangleIcon className="mr-1 text-red-500" size={16} /> */}
            {StatusIcon && (
              <StatusIcon className={`mr-1 text-${color}`} size={16} />
            )}
            <span className="text-sm font-semibold">{status}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-semibold mt-2 line-clamp-3">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
        <div className="relative h-1 rounded-full mt-2">
          <Progress
            value={30}
            className="absolute left-0 top-0 h-1 bg-secondary"
          />
          <div className="absolute left-0 top-0 w-3 h-3 -translate-y-1 rounded-full bg-white border-3 border-black"></div>
          <div className="absolute right-0 top-0 w-3 h-3 -translate-y-1 rounded-full bg-white border-3 border-secondary"></div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
              DF
            </AvatarFallback>
          </Avatar>
          <div className="text-sm leading-tight">
            <p className="font-medium text-gray-800">{owner}</p>
            <p className="text-gray-500 text-xs">{role}</p>
          </div>
        </div>
        <Button size="icon" className="rounded-full">
          <ChevronRight />
        </Button>
      </CardFooter>
      <div className="h-1 bg-destructive rounded-bl-lg rounded-br-lg" />
    </Card>
  );
};

export default BoardCard;
