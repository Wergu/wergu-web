import React, { useRef } from 'react';
import TopNav from '../components/TopNav';
import Bande1 from '../components/Bande1';
import img_mobile1 from "../img/img_mobile1.png"
import img_mobile2 from "../img/img_mobile2.png"
import img_mobile3 from "../img/img_mobile3.png"
import img_mobile4 from "../img/img_mobile4.png"
import { useEffect } from 'react';
import animateScrollTo from "animated-scroll-to"

const LandingPage = () => {
    const accueil = useRef(null)
    const nos_solutions = useRef(null)
    const la_team = useRef(null)
    const nous_contacter = useRef(null)

    let   handleNavClick = name => animateScrollTo(name.current, {minDuration: 1500,verticalOffset: -120})


    useEffect(() => {
        
        //window.scrollTo({top: 5000, behavior: "smooth"})
    },[])

    let styles = {
        sectionTitle: {
            fontFamily: "Lato",
            fontWeight: "bold",
            fontSize: 50,
            color: "#757575",
            textAlign: "center",
            marginTop: 50
        }
    }
    return (
        <>

            <TopNav
                handleNavClick={handleNavClick}
                references={{
                    accueil,
                    nos_solutions,
                    la_team,
                    nous_contacter
                }}
            />
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
            <p style={styles.sectionTitle} ref={nos_solutions}>Nos solutions</p>
            <Bande1
                text1="Trouvez la pharmacie ouverte la plus proche !"
                text2="Ne vous déplacez plus à perte. En un clic, trouvez les informations sur les 5 pharmacies ouvertes les plus proches de vous. On vous indique aussi le chemin et la durée du trajet,  que vous soyez  en voiture ou à pied."
                reversed
                principalImage={img_mobile2}
            />
          
            <Bande1
                text1="Faites vous livrer vos médicaments chez vous !"
                text2="Plus de problème de monnaie ou de déplacement. Photographiez votre ordonance à travers l’appli, nos pharmaciens partenaires et nos livreurs s’occupent du reste. Suivez en temps réel votre commande."
                principalImage={img_mobile3}
            />

            <Bande1
                text1="Informez vous sur la disponibilité et le prix de vos médicaments !"
                text2="Inutile de se déplacer pour se renseigner sur la disponibilité et le prix de vos médicamentts. Avec wergu, la réponse se trouveau bout de vos doigts."
                principalImage={img_mobile4}
                reversed
            />

        </>
    );
};

export default LandingPage;