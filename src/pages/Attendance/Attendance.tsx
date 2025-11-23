import React from 'react';
import PageMeta from "../../components/common/PageMeta";
import AttendanceTable from "../../components/attendance/AttendanceTable";

const Attendance: React.FC = () => {
    return (
        <>
            <PageMeta
                title="Attendance | Preschool Management"
                description="Track student attendance"
            />
            <div className="flex flex-col gap-10">
                <AttendanceTable />
            </div>
        </>
    );
};

export default Attendance;
