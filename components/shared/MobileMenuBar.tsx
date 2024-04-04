import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { Button } from "../ui/button";
import FeedBackDialog from "./FeedBackDialog";

const MobileMenuBar = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="px-7 py-3 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200">
          Open
        </SheetTrigger>
        <SheetContent className="bg-black bg-opacity-100 border-none h-full p-10 flex flex-col justify-between pl-12">
          <div className="flex flex-col gap-12">
            <h1 className="h1-semibold text-blue-500 ">BuildBreeze</h1>
            <div className="flex flex-col gap-6">
              {NavLinks.map((link) => (
                <h3
                  key={link.name}
                  className="text-gray-300 text-xl cursor-pointer"
                >
                  {link.name}
                </h3>
              ))}
            </div>
          </div>
          <div className="flex items-end ">
            <FeedBackDialog />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenuBar;
