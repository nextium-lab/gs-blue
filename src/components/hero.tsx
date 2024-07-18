import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export function Hero(){
    return (
        <section className="flex w-full md:h-[500px] items-center bg-[#020817] pb-10 pt-16" id="topo">
            <div className="grid grid-cols-1 md:grid-cols-2 container text-center md:text-left pt-10 text-white">
                <div>
                    <div className="py-5">
                        <h1 className="font-bold lg:text-5xl text-2xl pb-3">Transforme Seus Investimentos com <span className="text-primary">Day Trading</span></h1>
                        <span className="py-10">Maximize seus lucros com estratégias comprovadas e suporte profissional</span>
                    </div>
                    <div className="flex flex-grow justify-center md:justify-start gap-5">
                        <Button asChild variant={"default"} className="rounded-full">
                            <Link href={"https://wa.me/556598033659"} target="_blank"><CircleArrowOutUpRight size={20} className="mr-3" /> Comece Agora</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <Image src={"/bg/840@1x.webp"} alt="img-hero" width={"500"} height={"448"}/>
                </div>
            </div>
        </section>
    )
}