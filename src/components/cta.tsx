import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";

export function Cta() {
    return (
        <section className="w-full bg-[#020817] -mt-1">
            <div className="container py-20 ">
                <Card className="flex flex-col lg:flex-row lg:w-auto bg-gradient-to-r from-transparent to-primary bg-auto bg-primary md:h-[400px] rounded-3xl border-none text-white">
                    <div className="flex flex-col justify-center gap-3 p-10">
                        <h2 className="lg:w-2/4 lg:text-3xl text-2xl font-semibold">Pronto para transformar seu futuro financeiro? Junte-se a GS Blue!</h2>
                        <p className="lg:w-3/4">Experimente o poder do monitoramento em tempo real, aprendizado colaborativo e otimização estratégica. Não perca! Assuma o controle do seu destino financeiro.</p>
                        <div>
                            <Button asChild variant={"secondary"} className="rounded-full">
                                <Link href="/">Começar agora</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-end ">
                        <Image src="/bg/homem.png" alt="img-hero" width={800} height={800} className="hidden lg:block" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
