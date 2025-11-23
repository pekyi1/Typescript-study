import React from 'react';
import PageMeta from "../../components/common/PageMeta";
import ClassTable from "../../components/classes/ClassTable";

const Classes: React.FC = () => {
    return (
        <>
            <PageMeta
                title="Classes | Preschool Management"
                description="Manage classes list"
            />
            <div className="flex flex-col gap-10">
                <ClassTable />
            </div>
        </>
    );
};

export default Classes;
