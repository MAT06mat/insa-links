import type { ItemProps } from "../types/ItemProps";

export const LinksList: ItemProps[] = [
    {
        type: "folder",
        text: "Intranets",
        list: [
            {
                type: "link",
                text: "Intranet global",
                url: "https://intranet.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Intranet FIMI",
                url: "https://intranetfimi.insa-lyon.fr",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Intranet biosciences",
                url: "https://intranetbs.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Intranet centre des humanités",
                url: "https://intranethumas.insa-lyon.fr",
                iconDirectUrl: "./insa-icon.svg",
            },
        ],
    },
    {
        type: "folder",
        text: "Bibliothèque INSA Lyon",
        list: [
            {
                type: "link",
                text: "Bibliothèque INSA Lyon",
                url: "https://bibliotheque.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Universalis",
                url: "http://docelec.insa-lyon.fr/login?url=http://www.universalis-edu.com/",
                iconDirectUrl: "https://www.universalis.fr/favicon.ico",
                icon: "https://www.universalis.fr/",
            },
            {
                type: "link",
                text: "Techniques de l'ingénieur",
                url: "http://docelec.insa-lyon.fr/login?url=https://www.techniques-ingenieur.fr/",
                iconDirectUrl:
                    "https://cdn.techniques-ingenieur.fr/lucy/ti/cdn.prod.v3.10.0/images/logo-eti-mobile.png",
            },
            {
                type: "link",
                text: "Crisco",
                url: "https://crisco4.unicaen.fr/des/",
                iconDirectUrl:
                    "https://crisco4.unicaen.fr/des/img/CRISCO_LOGO_BLEU_DES.png",
                icon: "https://crisco.unicaen.fr",
                roundIcon: true,
            },
            {
                type: "link",
                text: "Europresse",
                url: "https://docelec.insa-lyon.fr/login?url=http://nouveau.europresse.com/access/ip/default.aspx?un=INSAT_3",
                iconDirectUrl:
                    "https://www.europresse.com/app/uploads/2023/07/favicon-europress.svg",
            },
        ],
    },
    {
        type: "folder",
        text: "Support & ressources techniques",
        list: [
            {
                type: "link",
                text: "Tuto VNP INSA",
                url: "https://dsi.insa-lyon.fr/sites/dsi.insa-lyon.fr/files/insal_dsi_pr_vpn_ciscoanyconnect_manuel_pub_v1.0.pdf",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Izly - Crous",
                url: "https://www.izly.fr/",
                iconDirectUrl: "./izly.png",
            },
            {
                type: "link",
                text: "Direction des Systèmes d'Information",
                url: "https://dsi.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Support résidences (SamFM)",
                url: "https://www.samfm.net/samfminsa",
                iconDirectUrl: "./globe.svg",
            },
            {
                type: "link",
                text: "Support technique (Planète INSA)",
                url: "https://planete.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
            {
                type: "link",
                text: "Factures Hébergement et Restauration",
                url: "https://paiement.insa-lyon.fr/",
                iconDirectUrl: "./insa-icon.svg",
            },
        ],
    },
    {
        type: "link",
        text: "Moodle",
        url: "https://moodle.insa-lyon.fr/",
        iconDirectUrl: "./moodle-icon.svg",
        roundIcon: true,
    },
    {
        type: "link",
        text: "ADE Emploi du temps",
        url: "https://ade-web.insa-lyon.fr/direct/myplanning.jsp",
        iconDirectUrl: "https://ade-web.insa-lyon.fr/favicon.ico",
    },
    {
        type: "link",
        text: "ADE Outils",
        url: "https://ade-outils.insa-lyon.fr/",
        iconDirectUrl: "https://ade-web.insa-lyon.fr/favicon.ico",
    },
    {
        type: "link",
        text: "Mails INSA",
        url: "https://zmail.insa-lyon.fr/",
        iconDirectUrl: "https://zmail.insa-lyon.fr/img/logo/favicon.ico",
        roundIcon: true,
    },
    {
        type: "link",
        text: "Mon dossier web",
        url: "https://mondossierweb.insa-lyon.fr",
        iconDirectUrl: "./insa-icon.svg",
    },
    {
        type: "link",
        text: "Markolla INSA",
        url: "https://markolla.insa-lyon.fr/",
        iconDirectUrl: "https://hedgedoc.org/icons/apple-touch-icon.png",
        roundIcon: true,
    },
    {
        type: "link",
        text: "INSA utils",
        url: "https://utils.bde-insa-lyon.fr/",
        iconDirectUrl: "https://utils.bde-insa-lyon.fr/icons/icon-256.png",
    },
];
