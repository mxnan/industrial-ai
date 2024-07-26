import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";


export default function Home() {
  return (
    <section className="min-h-[200vh] flex-center flex-col ">
     
      <div className="w-full">
        <VelocityScroll
          text="Industrial AI makes use of your numerical and non-numerical data to drive better decisions."
          default_velocity={5}
          className="font-display text-center text-xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white "
        />
      </div>
    </section>
  );
}
