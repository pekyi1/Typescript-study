import React from 'react';
import {
    GroupIcon,
    UserCircleIcon,
    BoxCubeIcon,
    CheckCircleIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function SchoolStats() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {/* Students */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl dark:bg-brand-500/10">
                    <GroupIcon className="text-brand-500 size-6 dark:text-brand-400" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Total Students</span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">124</h4>
                    </div>
                    <Badge color="success">
                        <ArrowUpIcon />
                        2.5%
                    </Badge>
                </div>
            </div>

            {/* Teachers */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl dark:bg-orange-500/10">
                    <UserCircleIcon className="text-orange-500 size-6 dark:text-orange-400" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Teachers</span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">12</h4>
                    </div>
                    <Badge color="success">
                        <ArrowUpIcon />
                        0%
                    </Badge>
                </div>
            </div>

            {/* Classes */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl dark:bg-purple-500/10">
                    <BoxCubeIcon className="text-purple-500 size-6 dark:text-purple-400" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Total Classes</span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">6</h4>
                    </div>
                </div>
            </div>

            {/* Attendance */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl dark:bg-green-500/10">
                    <CheckCircleIcon className="text-green-500 size-6 dark:text-green-400" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Attendance Today</span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">96%</h4>
                    </div>
                    <Badge color="error">
                        <ArrowDownIcon />
                        1.2%
                    </Badge>
                </div>
            </div>
        </div>
    );
}
