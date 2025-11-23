import React from 'react';
import PageMeta from "../../components/common/PageMeta";
import StudentTable from "../../components/students/StudentTable";

const Students: React.FC = () => {
    return (
        <>
            <PageMeta
                title="Students | Preschool Management"
                description="Manage students list"
            />
            <div className="flex flex-col gap-10">
                <StudentTable />
            </div>
        </>
    );
};

export default Students;
