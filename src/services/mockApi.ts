
export interface Student {
    id: string;
    name: string;
    age: number;
    grade: string;
    parentName: string;
    contact: string;
    status: 'Active' | 'Inactive';
}

export interface Teacher {
    id: string;
    name: string;
    subject: string;
    contact: string;
}

const mockStudents: Student[] = [
    { id: '1', name: 'Alice Johnson', age: 5, grade: 'Kindergarten', parentName: 'Martha Johnson', contact: '555-0101', status: 'Active' },
    { id: '2', name: 'Bob Smith', age: 4, grade: 'Pre-K', parentName: 'John Smith', contact: '555-0102', status: 'Active' },
    { id: '3', name: 'Charlie Brown', age: 5, grade: 'Kindergarten', parentName: 'Sarah Brown', contact: '555-0103', status: 'Inactive' },
    { id: '4', name: 'Daisy Miller', age: 3, grade: 'Toddlers', parentName: 'Karen Miller', contact: '555-0104', status: 'Active' },
    { id: '5', name: 'Ethan Hunt', age: 6, grade: 'Grade 1', parentName: 'Tom Hunt', contact: '555-0105', status: 'Active' },
];

const mockTeachers: Teacher[] = [
    { id: '1', name: 'Mrs. Anderson', subject: 'Kindergarten', contact: '555-0201' },
    { id: '2', name: 'Mr. Davis', subject: 'Music', contact: '555-0202' },
    { id: '3', name: 'Ms. Wilson', subject: 'Art', contact: '555-0203' },
];

export interface Class {
    id: string;
    name: string;
    teacher: string;
    studentsCount: number;
    schedule: string;
}

const mockClasses: Class[] = [
    { id: '1', name: 'Kindergarten A', teacher: 'Mrs. Anderson', studentsCount: 20, schedule: '9:00 AM - 1:00 PM' },
    { id: '2', name: 'Pre-K B', teacher: 'Mr. Davis', studentsCount: 15, schedule: '9:00 AM - 12:00 PM' },
    { id: '3', name: 'Toddlers C', teacher: 'Ms. Wilson', studentsCount: 10, schedule: '10:00 AM - 12:00 PM' },
];

export interface Attendance {
    id: string;
    studentName: string;
    date: string;
    status: 'Present' | 'Absent' | 'Late';
    class: string;
}

const mockAttendance: Attendance[] = [
    { id: '1', studentName: 'Alice Johnson', date: '2025-11-23', status: 'Present', class: 'Kindergarten A' },
    { id: '2', studentName: 'Bob Smith', date: '2025-11-23', status: 'Absent', class: 'Pre-K B' },
    { id: '3', studentName: 'Charlie Brown', date: '2025-11-23', status: 'Late', class: 'Kindergarten A' },
    { id: '4', studentName: 'Daisy Miller', date: '2025-11-23', status: 'Present', class: 'Toddlers C' },
    { id: '5', studentName: 'Ethan Hunt', date: '2025-11-23', status: 'Present', class: 'Kindergarten A' },
];

export interface Finance {
    id: string;
    studentName: string;
    amount: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    dueDate: string;
}

const mockFinance: Finance[] = [
    { id: '1', studentName: 'Alice Johnson', amount: '$500', status: 'Paid', dueDate: '2025-11-01' },
    { id: '2', studentName: 'Bob Smith', amount: '$500', status: 'Pending', dueDate: '2025-12-01' },
    { id: '3', studentName: 'Charlie Brown', amount: '$500', status: 'Overdue', dueDate: '2025-10-01' },
    { id: '4', studentName: 'Daisy Miller', amount: '$450', status: 'Paid', dueDate: '2025-11-01' },
    { id: '5', studentName: 'Ethan Hunt', amount: '$550', status: 'Pending', dueDate: '2025-12-01' },
];

export const mockApi = {
    getStudents: async (): Promise<Student[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockStudents]), 500);
        });
    },

    addStudent: async (student: Omit<Student, 'id'>): Promise<Student> => {
        return new Promise((resolve) => {
            const newStudent = { ...student, id: Math.random().toString(36).substr(2, 9) };
            mockStudents.push(newStudent);
            setTimeout(() => resolve(newStudent), 500);
        });
    },

    getTeachers: async (): Promise<Teacher[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockTeachers]), 500);
        });
    },

    getClasses: async (): Promise<Class[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockClasses]), 500);
        });
    },

    getAttendance: async (): Promise<Attendance[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockAttendance]), 500);
        });
    },

    getFinance: async (): Promise<Finance[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockFinance]), 500);
        });
    }
};
