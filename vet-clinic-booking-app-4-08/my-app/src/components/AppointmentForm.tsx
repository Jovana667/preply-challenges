import { useEffect, useState } from "react";
import type { Appointment, AppointmentFormData } from "../types";
import { PET_TYPES, SERVICES, VETS } from "../types";

type Props = {
    editing: Appointment | null;
    onCreate: (d: AppointmentFormData) => void;
}