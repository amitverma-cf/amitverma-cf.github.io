import LogoLoop from "@/components/LogoLoop";
import { Linkedin01Icon, TwitterSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Contact() {
    const contactLogos = [
        {
            src: "https://cdn.simpleicons.org/github/white",
            alt: "GitHub",
            href: "https://github.com/amitverma-cf"
        },
        {
            src: "https://cdn.simpleicons.org/huggingface/white",
            alt: "Hugging Face",
            href: "https://huggingface.co/amve"
        },
        {
            src: "https://cdn.simpleicons.org/gmail/white",
            alt: "Email",
            href: "mailto:ava.amitverma@gmail.com"
        },
        { node: <HugeiconsIcon size={100} icon={Linkedin01Icon} />, title: "LinkedIn", href: "https://www.linkedin.com/in/amve-me/" },
        { node: <HugeiconsIcon size={100} icon={TwitterSquareIcon} />, title: "X/Twitter", href: "http://x.com/amve_me" },
    ];
    return (
        <>
            <LogoLoop
                className="mt-30 -mb-40"
                logos={contactLogos}
                speed={200}
                direction="left"
                logoHeight={120}
                gap={120}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Contacts"
            />
        </>
    )
}