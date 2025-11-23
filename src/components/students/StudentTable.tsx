import React, { useEffect, useState } from 'react';
import { mockApi, Student } from '../../services/mockApi';
import Badge from '../ui/badge/Badge';
import { PencilIcon, TrashBinIcon, PlusIcon } from '../../icons';

export default function StudentTable() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        setLoading(true);
        const data = await mockApi.getStudents();
        setStudents(data);
        setLoading(false);
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-6 dark:border-gray-800 dark:bg-white/[0.03] sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white/90">
                    Student List
                </h4>
                <button className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
                    <PlusIcon className="size-5" />
                    Add Student
                </button>
            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-t-lg bg-gray-100 dark:bg-gray-900 sm:grid-cols-6">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Name
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Age
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Grade
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Parent
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Status
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-500 dark:text-gray-400">
                            Actions
                        </h5>
                    </div>
                </div>

                {loading ? (
                    <div className="p-5 text-center text-gray-500">Loading...</div>
                ) : (
                    students.map((student, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-6 ${key === students.length - 1
                                    ? ""
                                    : "border-b border-gray-200 dark:border-gray-800"
                                }`}
                            key={student.id}
                        >
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden text-gray-800 dark:text-white/90 sm:block font-medium">
                                    {student.name}
                                </p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-gray-800 dark:text-white/90">{student.age}</p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-gray-800 dark:text-white/90">{student.grade}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="text-gray-800 dark:text-white/90">{student.parentName}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <Badge color={student.status === 'Active' ? 'success' : 'error'}>
                                    {student.status}
                                </Badge>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-2">
                                <button className="text-gray-500 hover:text-brand-500">
                                    <PencilIcon className="size-5" />
                                </button>
                                <button className="text-gray-500 hover:text-red-500">
                                    <TrashBinIcon className="size-5" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
