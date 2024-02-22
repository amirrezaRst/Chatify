import Header from "@/components/header";
import { TopWave } from "@/components/svgs/Svgs";

export default function Home() {

  return (
    <>

      <Header />

      <section className="bg-cyan-300/5 relative">

        <div className="container grid grid-cols-2 gap-10 py-20">

          <div>
            <img src="/images/robot-hero.png" alt="robot" />
          </div>
          <div className="border border-blue-500 flex flex-col justify-center">
            <h2 className="text-3xl font-sans-medium mb-7">
              هوش مصنوعی <span className="font-sans-bold bg-gradient-to-bl from-[#623985de] to-[#C270C0] text-transparent bg-clip-text">Chatify</span>
            </h2>
            <ul className="space-y-3.5 font-sans-medium text-black/70">
              <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</li>
              <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با</li>
              <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بالورم ایپسوم متن ساختگی با تولید</li>
            </ul>
          </div>

        </div>
        <TopWave />
      </section>

    </>
  );
}
