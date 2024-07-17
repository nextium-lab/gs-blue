import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CandlestickChart, UserCheck, GraduationCap, Monitor } from 'lucide-react';

const SERVICES = [
    {
        title: "Análise Técnica",
        descriptions: "Oferecemos análises técnicas detalhadas para identificar oportunidades de negociação.",
        icon: CandlestickChart, // Ícone para Análise Técnica
    },
    {
        title: "Consultoria Personalizada",
        descriptions: "Receba aconselhamento personalizado de nossos especialistas.",
        icon: UserCheck, // Ícone para Consultoria Personalizada
    },
    {
        title: "Educação em Trading",
        descriptions: "Acesse cursos e webinars para melhorar suas habilidades de trading.",
        icon: GraduationCap, // Ícone para Educação em Trading
    },
    {
        title: "Plataforma de Trading",
        descriptions: "Utilize nossa plataforma de última geração para executar suas negociações com eficiência.",
        icon: Monitor, // Ícone para Plataforma de Trading
    },
];

export function Services() {
    return (
        <section className="w-full" id="por-que-nos">
            <div className="container py-10">
                <div className="flex flex-col gap-3 py-5">
                    <h3 className="text-2xl lg:text-3xl font-semibold">
                        Por que a <span className="text-primary">GS Blue?</span>
                    </h3>
                    <span className="lg:w-1/2">
                        Confiança, Expertise e Resultados Comprovados no Mercado de Day Trading.
                    </span>
                </div>
                <div className="flex justify-center py-10">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            {SERVICES.map((service, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="flex flex-col min-h-56 justify-between bg-white/5 border-none shadow">
                                            <CardHeader>
                                                <service.icon className="w-8 h-8 stroke-primary" />
                                            </CardHeader>
                                            <CardContent className="flex flex-col gap-5">
                                                <h4 className="text-lg font-semibold truncate">{service.title}</h4>
                                                <p>{service.descriptions}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
