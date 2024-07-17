import Link from "next/link";
import { Button } from "./ui/button";

export default function Logo() {
    return(
        <Button asChild variant={"logo"}>
            <Link href={"/"}>
                <span className="font-bold text-primary">GSBLUE </span>CORPORATION
            </Link>
        </Button>
    )
}