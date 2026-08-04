export type StudentStatus = "active" | "graduated" | "suspended";
export type StatusFilter = "all" | StudentStatus;

export type Student = {
    id: string;
    name: string;
    email: string;
    course: string;
    age: number;
    status: StudentStatus;
    createdAt: number;
    updatedAt: number;
};

export type StudentFormData = {
    name: string;
    email: string;
    course: string;
    age: string;
    status: StudentStatus;
};