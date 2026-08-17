import { useEffect, useState } from "react";
import type { Appointment, AppointmentFormData } from "../types";
import { PET_TYPES, SERVICES, VETS } from "../types";

type Props = {
  editing: Appointment | null;
  onCreate: (d: AppointmentFormData) => void;
  onUpdate: (id: string, d: AppointmentFormData) => void;
  onCancel: () => void;
};

const emptyForm: AppointmentFormData = {
  petName: "",
  petType: "Dog",
  ownerName: "",
  ownerNumber: "",
  service: "General Checkup",
  vetName: "Dr. Amina Bello",
  date: "",
  time: "09:00",
  status: "scheduled",
  notes: "",
};

export function AppointmentForm({
  editing,
  onCreate,
  onUpdate,
  onCancel,
}: Props) {
  const [form, setForm] = useState<AppointmentFormData>(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(
      editing
        ? {
            petName: editing.petName,
            petType: editing.petType,
            ownerName: editing.ownerName,
            ownerNumber: editing.ownerNumber,
            service: editing.service,
            vetName: editing.vetName,
            date: editing.date,
            time: editing.time,
            status: editing.status,
            notes: editing.notes,
          }
        : emptyForm,
    );
    setError("");
  }, [editing]);
}
