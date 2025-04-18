"use client";

import Hero from "@/components/hero";
import SliderComponents from "@/components/sliderComponant";
import Explor from "@/components/explor";
import AboutTeam from "@/components/aboutTeam";
import ComingSoon from "@/components/comingSoon";
import ReadyToEvolve from "@/components/readyEvolve";
import Footer from "@/components/footer";

export default function Home() {
  const firstData = [
    {
      title: "Dance Movement Therapy",
      desc: "Uses dance and body movement to support emotional, cognitive, and physical integration. Great for trauma, body image, and stress.",
      img: "/slider1.png",
    },
    {
      title: "Chakra Healing",
      desc: "Balances the 7 energy centers of the body using meditation, sound, or light. Improves emotional, physical, and spiritual well-being.",
      img: "/slider2.png",
    },
    {
      title: "Reiki Healing",
      desc: "An energy healing method using hands to balance the body's energy. Promotes deep relaxation and emotional healing.",
      img: "/slider3.png",
    },
    {
      title: "Aromatherapy",
      desc: "Uses essential oils to support mood, stress relief, and energy. Commonly paired with massage or mindfulness.",
      img: "/slider4.png",
    },
    {
      title: "Family Therapy",
      desc: "Works with families to improve communication, resolve conflict, and strengthen relationships. Involves multiple family members in sessions.",
      img: "/slider5.png",
    },
  ];
  const products = [
    {
      title: "Herbalife",
      desc: "Shake Mix, Protein Powder, Herbal Tea Concentrate, with shaker cup and spoon.​",
      img: "/product1.png",
    },
    {
      title: "NOW Foods",
      desc: "Essential Oils, D-3, Magnesium, Detox Support",
      img: "/product2.png",
    },
    {
      title: "Reiki Healing",
      desc: "An energy healing method using hands to balance the body's energy. Promotes deep relaxation and emotional healing.",
      img: "/product3.png",
    },
    {
      title: "Herbalife",
      desc: "Shake Mix, Protein Powder, Herbal Tea Concentrate, with shaker cup and spoon.​",
      img: "/product1.png",
    },
    {
      title: "NOW Foods",
      desc: "Essential Oils, D-3, Magnesium, Detox Support",
      img: "/product2.png",
    },
  ];
  return (
    <>
      <Hero />
      {/* <Counsile /> */}

      <SliderComponents
        title={"Our Counselling Services"}
        subtitle={'"Talk it out. Heal within"'}
        paragraph={"Professional therapies for your mind, heart, and soul."}
        data={firstData}
        displayBg={"block"}
      />
      <SliderComponents
        title={""}
        subtitle={""}
        paragraph={""}
        data={firstData}
        displayBg={"hidden"}
      />
      <SliderComponents
        title={"Our Products"}
        subtitle={
          '"This is for you - Because we care beyond the conversation."'
        }
        paragraph={
          "From comfort wear to calming rituals, everything here is chosen with you in mind."
        }
        data={products}
        displayBg={"block"}
      />
      <Explor />
      <AboutTeam />
      <ComingSoon />
      <ReadyToEvolve />
      <Footer />
    </>
  );
}
