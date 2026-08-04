import { useMemo, useState } from 'react';
import type {
    Appointment,
    AppointmentFormData,
    AppointmentStatus,
    StatusFilter,
    User,
} from "../types";
import { AppointmentForm } from "./AppointmentForm";
import { AppointmentTable } from "./AppointmentTable";
import {
    loadAppointments,
    logoutUser,
    makeAppointment,
    saveAppointments,
} from "../storage";

type Props = { user: User; onLogout: () => void };

export function Dashboard({ user, onLogout }: Props) {
    const [appointments, setAppointments] = useState<Appointment[]>(() =>
    loadAppointments(),
    );
    const [editing, setEditing] = useState<Appointment | null>(null);
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
    const [toast, setToast] = useState("");

    function persist(next: Appointment[]) {
        setAppointments(next);
        saveAppointments(next);
    }

    function addAppointment(data: AppointmentFormData) {
        const conflict = appointments.some(
            (a) =>
                a.date === data.date &&
                a.time === data.time &&
                a.vetName === data.vetName &&
                a.status !== "cancelled",
        );
        if (conflict) 
        return setToast("This vert already has an appointment at that date and time.",);
    persist([makeAppointment(data, user.id), ...appointments]);
    setToast("Appointment booked successfully.");
    }

}