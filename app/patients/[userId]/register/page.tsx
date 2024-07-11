import Image from "next/image";
import Link from "next/link";
// Image exports
import logo from "@/public/assets/icons/logo-full.svg";
import sidePic from "@/public/assets/images/register-img.png";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className='flex h-screen max-h-screen '>
      <section className='remove-scrollbar container max-w-[860px] flex-1 flex-col py-10'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt='logo'
            className='mb-12 h-10 w-fit'
          />

          <RegisterForm user={user} />

          <p className='copyright py-12'>
            © 2024 CarePulse. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src='/assets/images/register-img.png'
        width={1000}
        height={1000}
        alt='Patient'
        className='side-img max-w-[390px]'
      />
    </div>
  );
};

export default Register;
