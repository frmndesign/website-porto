import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import GradientText from "./components/GradientText/GradientText";
import Squares from "./components/Squares/Squares";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import TrueFocus from "./components/TrueFocus/TrueFocus";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#004068]">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"> 
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#008f9c'
        hoverFillColor='#67E8F9'
      />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center h-full">
          
            <div className="flex items-center gap-2">

              <div className="custom-class">
              <GradientText
                colors={["#00FFFF", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
              <h1 className="text-3xl font-bold">I'am ready For Job</h1>
              </GradientText>
              </div>
              
              <RotatingText
                  texts={['UI/UX Design', 'Social Media Design', 'Logo Design']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-[#004068] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
              />
            </div>
            
            <div className="flex flex-col items-start">
              <SplitText
                text="My name is Firman!"
                className="text-6xl font-semibold text-center text-white"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
            <div className="flex flex-col gap-6">
            <div>
              <SplitText
                text="I'am a Graphic Designer"
                className="text-6xl font-semibold text-center text-cyan-300"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
            
            
            <BlurText
              text="Hello, My name is M. Firmansyah Abdullah. I'am from Indonesia . I start drawing since junior high school. My hobby is drawing. I can make caricatur, cartoon potrait, vector potrait, ilustrations, and etc. I have been in this field for along time. To see my work, please see my gigs. Thank you^_^"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-1xl mb-8" 
            />

            <TrueFocus 
            sentence="Consultasion Now!!"
            manualMode={false}
            blurAmount={5}
            borderColor="#00FFFF"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
          </div>
          
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[2, 0, 20]} gravity={[0, -40, 0]}/>
            
                    <CircularText
                      text="FRMN*DSGN*COMPANY*"
                      onHover="speedUp"
                      spinDuration={20}
                      className="absolute right-10 top-40"
                    />
          </div>
          </div>
      </div>
      <div className="container flex flex-col w-full">
      <ScrollVelocity
        texts={['FRMN.DESIGN', 'MAKE AWASOME DESIGN']} 
      />
      </div>
    </div>
  );
}
