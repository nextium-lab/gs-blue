import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Informacoes() {
    return(
        <section className="w-full" id="mais-informacoes">
            <div className="flex flex-col gap-10 container py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 mt-20 gap-7">
                <div className="flex flex-col gap-3 lg:order-1">
                <span className="font-medium text-primary">Realtime Monitoring</span>
                <h3 className="text-2xl lg:text-3xl">Empower your Decisions whith Real-Time Monitoring</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div>
                    <Button asChild variant={"outline"} className="rounded-full border-primary">
                        <Link href={"/"}>Read More</Link>
                    </Button>
                </div>
                </div>
                <div className="flex lg:justify-start justify-center">
                <Image src="/bg/480@2x.webp" alt="img-hero" width={420} height={420} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-7">
                <div className="flex flex-col gap-3">
                <span className="font-medium text-primary">Realtime Monitoring</span>
                <h3 className="text-2xl lg:text-3xl">Empower your Decisions whith Real-Time Monitoring</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div>
                    <Button asChild variant={"outline"} className="rounded-full border-primary">
                        <Link href={"/"}>Read More</Link>
                    </Button>
                </div>
                </div>
                <div className="flex lg:justify-end justify-center">
                <Image src="/bg/840@2x.webp" alt="img-hero" width={400} height={400}/>
                </div>
            </div>
            </div>
      </section>
    )
}