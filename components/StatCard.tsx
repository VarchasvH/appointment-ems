import clsx from "clsx";
import Image from "next/image";

interface StatCardProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}
const Statcard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className='flex items-center gap-4'>
        <Image
          src={icon}
          height={22}
          width={22}
          alt={label}
          className='size-8 w-fit'
        />
        <h2 className='text-32-bold text-[#f2f3f4]'>{count}</h2>
      </div>
      <p className='text-14-regular'>{label}</p>
    </div>
  );
};

export default Statcard;
