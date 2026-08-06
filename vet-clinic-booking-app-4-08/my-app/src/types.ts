export type Page = "login" | "signup" | "dashboard";
export type User = {
    id: string;
    fullName: string;
    email: string;
    password: string;
    createdAt: number;
};
// "PetType is a compile-time-only union type that restricts a value to one of five strings; 
export type PetType = "dog" | "cat" | "bird" | "rabbit" | "other";
export type AppointmentStatus = "scheduled" | "completed" | "cancelled";
export type StatusFilter = "all" | AppointmentStatus;
export type Appointment = {
    id: string;
    petName: string;
    petType: PetType;
    ownerName: string;
    ownerPhone: string;
    service: string;
    vetName: string;
    date: string;
    time: string;
    status: AppointmentStatus;
    notes: string;
    createdBy: string;
    createdAt: number;
    updatedAt: number;
}

export type AppointmentFormData = Omit<Appointment, "id" | "createdBy" | "createdAt" | "updatedAt">;
// PET_TYPES is the runtime array holding those same strings, which exists so the UI has 
// actual values to loop over — types don't exist after compilation, so you can't map over 
// PetType directly."

export const PET_TYPES: PetType[] = ["dog", "cat", "bird", "rabbit", "other"];
export const SERVICES = ["general checkup", "vaccination", "dental care", "emergency care", "surgery consultation", "grooming"];
export const VETS = ["Dr. Amina Bello", "Dr. John Smith", "Dr. Mary Okafor", "Dr. David Chen"];