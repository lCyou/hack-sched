'use client'
import { TimeStatsTable } from "@/components/table";

const SchedulePage = () => {
    const value =[new Date(), new Date()];
    const dragging = true;
    const setDragging = () => {};
    return (
        <div>
            <TimeStatsTable calendarValue={value} isDragging={dragging} setIsDragging={setDragging} />
        </div>
    );
}

export default SchedulePage;