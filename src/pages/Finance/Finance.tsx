import React from 'react';
import PageMeta from "../../components/common/PageMeta";
import FinanceTable from "../../components/finance/FinanceTable";

const Finance: React.FC = () => {
    return (
        <>
            <PageMeta
                title="Finance | Preschool Management"
                description="Manage fees and payments"
            />
            <div className="flex flex-col gap-10">
                <FinanceTable />
            </div>
        </>
    );
};

export default Finance;
