import CircularGallery from "@/components/CircularGallery";
import { contactItems } from "@/config";

export function Contact() {
    return (
        <>
            <CircularGallery
                items={contactItems}
                bend={-3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
            />
        </>
    )
}