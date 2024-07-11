import { Button } from "@/components/ui/button";
import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

// Image exports
import logo from "@/public/assets/icons/logo-full.svg";
import sidePic from "@/public/assets/images/damn.jpg";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className='flex h-screen max-h-screen '>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[860px] flex-1 justify-between'>
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt='logo'
            className='mb-12 h-10 w-fit'
          />
          <AppointmentForm
            userId={userId}
            patientId={patient?.$id}
            type='create'
          />
          <p className='copyright py-12'>
            © 2024 CarePulse. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src={sidePic}
        width={1000}
        height={1000}
        alt='appointment'
        className='side-img max-w-[500px] bg-bottom'
      />
    </div>
  );
};

export default NewAppointment;
