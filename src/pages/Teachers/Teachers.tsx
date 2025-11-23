import React from 'react';
import PageMeta from "../../components/common/PageMeta";
import TeacherTable from "../../components/teachers/TeacherTable";

const Teachers: React.FC = () => {
    return (
        <>
            <PageMeta
                title="Teachers | Preschool Management"
                description="Manage teachers list"
            />
            <div className="flex flex-col gap-10">
                <TeacherTable />
            </div>
        </>
    );
};

export default Teachers;
