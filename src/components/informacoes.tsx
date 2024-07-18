import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export function Informacoes() {
    return(
        <section className="w-full" id="mais-informacoes">
            <div className="flex flex-col gap-10 container py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-7">
                <div className="flex flex-col gap-3 lg:order-1">
                    <div>
                        <Badge className="mb-3">sobre</Badge>
                        <h3 className="text-2xl lg:text-3xl mb-3 font-semibold">Sobre nós</h3>
                        <p className="mb-3">Somos uma empresa que atua no mercado financeiro, levando aos nossos parceiros e cotistas a oportunidade de diversificar capital e alavancar suas operações com nossas cotas de investimentos.</p>
                        <p>A <span className="text-primary">GS BLUE Corporation</span> nasceu com a missão de trazer um conceito financeiro novo, abrindo horizontes e formando uma cultura inovadora, sempre trazendo mentoria aos seus cotistas.</p>
                    </div>
                    <div>
                        <Button asChild variant={"outline"} className="rounded-full border-primary">
                            <Link href={"https://wa.me/556598033659"} target="_blank">Saber mais</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex lg:justify-start justify-center">
                <Image src="/bg/480@2x.webp" alt="img-hero" width={420} height={420} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-7">
                <div className="flex flex-col gap-3">
                    <div>
                        <Badge className="mb-3">cotista</Badge>
                        <h3 className="text-2xl lg:text-3xl mb-3 font-semibold">Seja um Cotista</h3>
                        <p className="mb-3">Desperte o empreendedorismo que há em você, planeje seu futuro e conecte-se com a maior tendência dos próximos anos.</p>
                        <p>A GS BLUE Corporation oferece cotas de investimentos, firmadas em contratos, para atender você de forma eficiente, segura e acessível.</p>
                    </div>
                    <div>
                        <Button asChild variant={"outline"} className="rounded-full border-primary">
                            <Link href={"https://wa.me/556598033659"} target="_blank">Torne-se um cotista</Link>
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