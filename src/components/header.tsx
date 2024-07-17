import { ModeToggle } from "@/components/mode-toggle";

import { Menu, MessageCircle } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

import Link from "next/link";
import Logo from "./logo";

const LINKS = [
    {
        title: "Topo",
        urls: "#topo",
    },
    {
        title: "Por que nós?",
        urls: "#por-que-nos",
    },
    {
        title: "Mais Informações",
        urls: "#mais-informacoes",
    },
    {
        title: "Depoimentos",
        urls: "#depoimentos",
    },
];

export function Header(){
    return (
        <header className="w-full fixed bg-white shadow z-50">
            <div className="flex items-center justify-between container py-3">
                <Logo />
                
                <div className="hidden lg:block">
                    {LINKS.map((menu, idx) => (
                        <Button key={idx} asChild variant={"ghost"}>
                            <Link href={menu.urls}>
                                {menu.title}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <div className="hidden lg:block">
                        <Button asChild variant={"default"} className="rounded-full">
                            <Link href={"/"}>
                                <MessageCircle size={15} className="mr-3"/> Contato
                            </Link>
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size={"icon"}><Menu className="h-[1.2rem] w-[1.2rem]"/></Button>
                            </SheetTrigger>
                            <SheetContent side={"bottom"}>
                                <SheetHeader className="mt-5">
                                    {LINKS.map((menu, idx) => (
                                        <Button key={idx} asChild variant={"outline"}>
                                            <Link href={menu.urls}>
                                                {menu.title}
                                            </Link>
                                        </Button>
                                    ))}
                                    <Button asChild variant={"default"}>
                                        <Link href={"/"}>
                                            <MessageCircle size={15} className="mr-3"/> Contato
                                        </Link>
                                    </Button>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
