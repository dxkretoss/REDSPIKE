import React from 'react'
import LanguageSwitcher from "../components/LanguageSwitcher";
import Contact from '../components/Contact';
import OurClient from '../components/OurClient';
import Ourservices from '../components/Ourservices';
import IntroSection from '../components/IntroSection';
import OffenseHero from '../components/OffenseHero';
export default function Homepage() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed bottom-6 right-6 z-50">
                <LanguageSwitcher />
            </div>
            <OffenseHero />
            <IntroSection />
            <Ourservices />
            <OurClient />
            <Contact />
        </div>
    )
}
