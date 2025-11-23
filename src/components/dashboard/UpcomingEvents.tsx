import React from 'react';
import { CalenderIcon } from "../../icons";

export default function UpcomingEvents() {
    const events = [
        { title: "Parent-Teacher Meeting", date: "Nov 25, 2025", time: "10:00 AM" },
        { title: "Winter Break Starts", date: "Dec 20, 2025", time: "All Day" },
        { title: "School Play", date: "Dec 15, 2025", time: "05:00 PM" },
    ];

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">Upcoming Events</h3>
                <button className="text-sm font-medium text-brand-500 hover:text-brand-600">View All</button>
            </div>

            <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-lg text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
                            <CalenderIcon className="size-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">{event.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{event.date} • {event.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
