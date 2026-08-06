import type { Appointment, AppointmentStatus } from "../types";

// props is a type alias with four properties: appointments (an array of appointment objects) 
// and 3 callback props (onEdit, onDelete and onStatus)
// each callback prop is typed as a function that takes some identifying data and returns void
// they return a void as they notify the parent rather than returning a value themselves
type Props = {
    appointments: Appointment[];
    onEdit: (a: Appointment) => void;
    onDelete: (id: string) => void;
    onStatus: (id: string, status: AppointmentStatus) => void;
}

function cls(s: AppointmentStatus) {
    if (s === "scheduled") return "badge yellow";
    if (s === "completed") return "badge green";
    return "badge red";
}

