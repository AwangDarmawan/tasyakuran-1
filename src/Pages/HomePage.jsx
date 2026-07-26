import { useEffect, useRef, useState } from "react"
import HeroSection from '../Components/Hero/HeroSection'
import AyatSection from '../Components/Ayat/AyatSection'
import AssalamualikumSection from '../Components/Assalmualaikum/AssalamulaikumSection'
import AcaraSection from '../Components/Acara/AcaraSection'
import GallerySection from '../Components/Gallery/GallerySection'
import GiftSection from '../Components/Gift/GiftSection'
import RsvpSection from '../Components/RSVP/RsvpSection'
import ClosingSection from '../Components/Closing/ClosingSection'
import Footer from '../Components/Footer'
import CoverSection from '../Components/Cover/CoverSection'
import Lagu from "../assets/VD/sholawathijrotu.mp3"
import { Volume2, VolumeX } from "lucide-react"


function HomePage() {
   const [open, setOpen] = useState(false);
     const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const handleOpenInvitation = () => {
  setOpen(true);

  if (audioRef.current) {
    audioRef.current.play();
    setIsPlaying(true);
  }
};


  return (
    <>
     {!open && (
        <CoverSection
          onOpen={() => setOpen(handleOpenInvitation)}
        />
      )}
      <HeroSection/>
     

      <AyatSection/>
      <AssalamualikumSection/>
      <AcaraSection/>
      <GallerySection/>
      <GiftSection/>
      <RsvpSection/>
      <ClosingSection/>
      <Footer/>
       <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-24
    right-5
    z-50
    w-12
    h-12
    
    rounded-full
    border
  border-[#0B5B59]
  bg-white/50
 
  text-[#0B5B59]
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>
    </>

  )
}

export default HomePage
