export interface ButtonProps {
    children: string;
    width: string;
    bgColor: string;
    fontColor: string;
}

export interface HeadingProps {
    children: string;
    fontColor: string;
    bgColor: string;
    fontSize: string;
}

export interface CardServiceProps {
    imageLink: string;
    fontColorCard: string;
    illustration: string
    bgColorCard: string
}

export interface FaqProps {
    number: string;
    title: string;
    description: string;
}

export interface CardTeamProps {
    photo: string;
    description: string;
    name: string;
    position: string;
}

export interface CommentProps {
    comment: string;
    client: string;
    position: string;
}