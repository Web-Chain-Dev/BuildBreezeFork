import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import FeedBackForm from "./FeedBackForm";
import { usePathname } from "next/navigation";

const FeedBackDialog = ({ classes }: { classes?: string }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`px-7 py-4 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200 ${classes}`}
      >
        Feedback
      </DialogTrigger>
      <DialogContent className="flex flex-col bg-gray-900 [#032B44] bg-opacity-100 border-none rounded-[14px] text-center gap-6 ">
        <h3 className="text-blue-500 text-4xl font-semibold ">Feedback</h3>
        <p className="text-gray-400">
          If you believe we should change or improve something tell us
        </p>
        <FeedBackForm />
      </DialogContent>
    </Dialog>
  );
};

export default FeedBackDialog;
