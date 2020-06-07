import React, { useRef, Suspense } from 'react';
import img_mobile1 from "../img/img_mobile1.png"
import img_mobile2 from "../img/img_mobile2.png"
import img_mobile3 from "../img/img_mobile3.png"
import img_mobile4 from "../img/img_mobile4.png"
import animateScrollTo from "animated-scroll-to"

const TopNav = React.lazy(() => import("../components/TopNav"))
const Bande1 = React.lazy(() => import("../components/Bande1"))
const WerguPharma = React.lazy(() => import("../components/WerguPharma"))
const Team = React.lazy(() => import("../components/Team"))
const Contact = React.lazy(() => import("../components/Contact"))

const LandingPage = () => {
    const accueil = useRef(null)
    const nos_solutions = useRef(null)
    const la_team = useRef(null)
    const nous_contacter = useRef(null)

    let handleNavClick = name => animateScrollTo(name.current, { minDuration: 1500, verticalOffset: -120 })





    let styles = {
        sectionTitle: {
            fontFamily: "Lato",
            fontWeight: "bold",
            fontSize: 50,
            color: "#757575",
            textAlign: "center",
            marginTop: 80,
            
        }
    }
    return (
        <>
            <Suspense fallback="">
            <TopNav
                handleNavClick={handleNavClick}
                references={{
                    accueil,
                    nos_solutions,
                    la_team,
                    nous_contacter
                }}
            />
            </Suspense>

            <Suspense fallback="">
            <Bande1
                mt={150}
                references={{
                    accueil
                }}
                text1="Obtenez vos médicaments en quelques clics !"
                text2="Ne perdez plus de temps. Que ce soit pour trouver une pharmacie ouverte autour de vous ou pour vous faire livrer vos médicaments, Wergu s’occupe de tout !"
                needStoreButtons
                principalImage={img_mobile1}
            />
            </Suspense>

            <p style={styles.sectionTitle} ref={nos_solutions}>Nos solutions</p>
            <Suspense fallback="">
            <Bande1
                text1="Trouvez la pharmacie ouverte la plus proche !"
                text2="Ne vous déplacez plus à perte. En un clic, trouvez les informations sur les 5 pharmacies ouvertes les plus proches de vous. On vous indique aussi le chemin et la durée du trajet,  que vous soyez  en voiture ou à pied."
                reversed
                principalImage={img_mobile2}
            />
            </Suspense>
            <div style={{ backgroundColor: "#F5F5F5", padding: 10 }}>
            <Suspense fallback="">
                <Bande1
                    text1="Faites vous livrer vos médicaments chez vous !"
                    text2="Plus de problème de monnaie ou de déplacement. Photographiez votre ordonance à travers l’appli, nos pharmaciens partenaires et nos livreurs s’occupent du reste. Suivez en temps réel votre commande."
                    principalImage={img_mobile3}
                />
            </Suspense>
            </div>
            <Suspense fallback="">
            <Bande1
                text1="Informez vous sur la disponibilité et le prix de vos médicaments !"
                text2="Inutile de vous déplacer pour vous renseigner sur la disponibilité et le prix de vos médicaments. Avec wergu, la réponse se trouve au bout de vos doigts."
                principalImage={img_mobile4}
                reversed
            />
            </Suspense>

            <Suspense fallback="">
            <WerguPharma/>
            </Suspense>

            <p style={styles.sectionTitle} id="ttt" ref={la_team}>La team</p>
            <Suspense fallback="">
            <Team/>
            </Suspense>
            <p style={styles.sectionTitle} ref={nous_contacter}>Contactez nous</p>
            <Suspense fallback="">
            <Contact/>
            </Suspense>
            

        </>
    );
};

export default LandingPage;