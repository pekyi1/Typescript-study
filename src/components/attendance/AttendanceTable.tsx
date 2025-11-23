import React, { useEffect, useState } from 'react';
import { mockApi, Attendance } from '../../services/mockApi';
import Badge from '../ui/badge/Badge';

export default function AttendanceTable() {
    const [attendance, setAttendance] = useState<Attendance[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAttendance();
    }, []);

    const loadAttendance = async () => {
        setLoading(true);
        const data = await mockApi.getAttendance();
        setAttendance(data);
        setLoading(false);
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-6 dark:border-gray-800 dark:bg-white/[0.03] sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white/90">
                    Daily Attendance
                </h4>
                <div className="text-sm text-gray-500">
                    Date: {new Date().toLocaleDateString()}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-t-lg bg-gray-100 dark:bg-gray-900 sm:grid-cols-4">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Student Name
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Class
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Status
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Time
                        </h5>
                    </div>
                </div>

                {loading ? (
                    <div className="p-5 text-center text-gray-500">Loading...</div>
                ) : (
                    attendance.map((record, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-4 ${key === attendance.length - 1
                                    ? ""
                                    : "border-b border-gray-200 dark:border-gray-800"
                                }`}
                            key={record.id}
                        >
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden text-gray-800 dark:text-white/90 sm:block font-medium">
                                    {record.studentName}
                                </p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-gray-800 dark:text-white/90">{record.class}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <Badge color={record.status === 'Present' ? 'success' : record.status === 'Absent' ? 'error' : 'warning'}>
                                    {record.status}
                                </Badge>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="text-gray-500 dark:text-gray-400">09:00 AM</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
