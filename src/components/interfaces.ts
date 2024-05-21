export interface ParallaxProps {
    children: any;
    baseVelocity: number;
    rightShift?: number;
    leftShift?: number;
    widthupper?: string;
    widthlower?: string;
    numofchildren: number;
}

export interface TopBarProps{
    children: string;
    width: string;
}

export interface TopProps{
    topbar: TopBarProps;
    children: string;
}

export interface MotionButton{
    children: string;
    Icon: any;
    href: string;
}

export interface ProjectsProps{
    title: string;
    description: string;
    tags: string[];
    image: any;
    link: string;
    width: number;
    height: number;
}

export interface EmailTemplateProps {
    email: string;
    subject: string;
    body: string;
}

export interface ProjectTag {
    name: string, 
    onClick: (name: string) => void, 
    isSelected: boolean 
}

export interface TimeWorked{
    startMonth: number;
    startYear: number;
}