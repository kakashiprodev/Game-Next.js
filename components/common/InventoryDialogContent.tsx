import React from "react";
import { DialogContent } from "../ui/dialog";
import Searchbar from "./Searchbar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
const item = {
    times: 5,
    amount: 12435.56,
};

const InventoryDialogContent = () => {
    const itemsArray = Array.from({ length: 40 });
    return (
        <DialogContent className="w-fit border-none flex flex-col lg:flex-row">
            <VisuallyHidden>
                <DialogTitle>InventoryDialogContent</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
                    <h2 className="leading-[19.2px] text-[16px] font-fredoka">
                        Inventory
                    </h2>
                </div>
                <div className="flex justify-center items-center m-[12px]">
                    <Searchbar />
                </div>
                <h2 className="leading-[19.2px] font-fredoka text-[16px] mb-[12px] mx-[170.5px]">
                    You don’t have any tradeable items in you inventory.
                </h2>
            </div>
        </DialogContent>
    );
};

export default InventoryDialogContent;
