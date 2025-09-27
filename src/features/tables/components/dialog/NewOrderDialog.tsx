"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TableProps } from "../Table";

interface NewOrderDialogProps {
  open: boolean;
  table: TableProps;
  onOpenChange: (open: boolean) => void;
}

const NewOrderDialog = ({ open, table, onOpenChange }: NewOrderDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Order</DialogTitle>
          <DialogDescription>
            Create a new order for table {table.label}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p>
            <strong>Table:</strong> {table.label}
          </p>
          <p>
            <strong>Seats:</strong> {table.seatCount}
          </p>
          <p>
            <strong>Area:</strong> {table.area}
          </p>
          {/* giả lập nhập thông tin */}
          <p className="italic text-muted-foreground">
            (Form chọn món ăn sẽ được đặt ở đây...)
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => alert("Order Created!")}>Create Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewOrderDialog;
