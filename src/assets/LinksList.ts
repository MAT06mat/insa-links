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
                icon: "https://www.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Intranet FIMI",
                url: "https://intranetfimi.insa-lyon.fr",
                icon: "https://www.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Intranet biosciences",
                url: "https://intranetbs.insa-lyon.fr/",
                icon: "https://www.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Intranet centre des humanités",
                url: "https://intranethumas.insa-lyon.fr",
                icon: "https://www.insa-lyon.fr/",
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
                icon: "https://www.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Universalis",
                url: "http://docelec.insa-lyon.fr/login?url=http://www.universalis-edu.com/",
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
                icon: "https://www.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Izly - Crous",
                url: "https://www.izly.fr/",
                iconDirectUrl:
                    "https://www.izly.fr/images/favicons/favicon-32x32.png",
            },
            {
                type: "link",
                text: "Direction des Systèmes d’Information",
                url: "https://dsi.insa-lyon.fr/",
            },
            {
                type: "link",
                text: "Support résidences (SamFM)",
                url: "https://www.samfm.net/samfminsa",
            },
            {
                type: "link",
                text: "Support technique (Planète INSA)",
                url: "https://planete.insa-lyon.fr/",
                icon: "https://www.insa-lyon.fr/",
            },
        ],
    },
    {
        type: "link",
        text: "Moodle",
        url: "https://moodle.insa-lyon.fr/",
        icon: "https://moodle.com",
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
        roundIcon: true,
    },
    {
        type: "link",
        text: "Mon dossier web",
        url: "https://mondossierweb.insa-lyon.fr",
    },
    {
        type: "link",
        text: "Filesender made by INSA",
        url: "https://filesender.renater.fr/",
    },
    {
        type: "link",
        text: "INSA utils",
        url: "https://insa-utils.fr/",
    },
];
