import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

const DEPOIMENTS = [
    {
        title: "Diverse Investment Options",
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "John Doe",
        obs: "Analyst",
        imag: "https://github.com/shadcn.png",
    },
    {
        title: "Diverse Investment Options",
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "John Doe",
        obs: "Analyst",
        imag: "https://github.com/shadcn.png",
    },
    {
        title: "Diverse Investment Options",
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "John Doe",
        obs: "Analyst",
        imag: "https://github.com/shadcn.png",
    },
    {
        title: "Diverse Investment Options",
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "John Doe",
        obs: "Analyst",
        imag: "https://github.com/shadcn.png",
    },
    {
        title: "Diverse Investment Options",
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "John Doe",
        obs: "Analyst",
        imag: "https://github.com/shadcn.png",
    },

];

export function Depoiments(){
    return(
        <section className="w-full bg-[#020817]" id="depoimentos">
            <div className="container py-10">
                <div className="flex flex-col gap-3 py-10 lg:text-center text-white">
                    <div>
                        <Badge variant={"default"}><Star size={20} className="bg-white rounded-full mr-3 -ml-2 p-1 fill-primary stroke-primary"/> Rated 4.9 / 5</Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-medium"> Histórias reais, experiências genuínas, depoimentos confiáveis</h3>
                    <span className="lg:text-center"> Na GS Blue, acreditamos que a plataforma é crucial para sua jornada financeira. Escolha a GS Blue para uma experiência de investimento superior.</span>
                </div>
                <div className="flex justify-center py-10">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            {DEPOIMENTS.map((depoiments, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className="p-1">
                                        <Card className="flex flex-col aspect-video justify-between bg-white/5 border-none text-white">
                                            <CardHeader>
                                                <Image src={"/bg/aspas.png"} alt="aspas" width={30} height={30}/>
                                            </CardHeader>
                                            <CardContent >
                                                <h4 className="text-lg font-semibold truncate">{depoiments.title}</h4>
                                                <p>{depoiments.descriptions}</p>
                                            </CardContent>
                                            <CardFooter className="flex gap-3">
                                                <Avatar>
                                                    <AvatarImage src={depoiments.imag} alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-1">
                                                    <p>{depoiments.name}</p>
                                                    <p className="text-xs">{depoiments.obs}</p>
                                                </div>
                                            </CardFooter>
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
    )
}