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
        type: "link",
        text: "Moodle",
        url: "https://moodle.insa-lyon.fr/",
        icon: "https://moodle.com",
    },
    {
        type: "link",
        text: "ADE Emploi du temps",
        url: "https://ade-web.insa-lyon.fr/direct/myplanning.jsp",
    },
    {
        type: "link",
        text: "Mails INSA",
        url: "https://zmail.insa-lyon.fr/",
    },
    {
        type: "link",
        text: "Support technique",
        url: "https://planete.insa-lyon.fr/",
        icon: "https://www.insa-lyon.fr/",
    },
    {
        type: "link",
        text: "Tuto VNP INSA",
        url: "https://dsi.insa-lyon.fr/sites/dsi.insa-lyon.fr/files/insal_dsi_pr_vpn_ciscoanyconnect_manuel_pub_v1.0.pdf",
    },
    {
        type: "link",
        text: "Mon dossier web",
        url: "https://mondossierweb.insa-lyon.fr",
    },
    {
        type: "link",
        text: "Envoyer des fichiers lourds made by INSA",
        url: "https://filesender.renater.fr/",
    },
    {
        type: "link",
        text: "Pour gérer l’argent pour les resto du CROUS",
        url: "https://www.izly.fr/",
    },
    {
        type: "link",
        text: "Bibliothèque INSA Lyon",
        url: "https://bibliotheque.insa-lyon.fr/",
        icon: "https://www.insa-lyon.fr/",
    },
    {
        type: "link",
        text: "Direction des Systèmes d’Information",
        url: "https://dsi.insa-lyon.fr/",
    },
    {
        type: "link",
        text: "Site pour consulter le menu, calculer ses points pour le RI",
        url: "https://insa-utils.fr/",
    },
];
