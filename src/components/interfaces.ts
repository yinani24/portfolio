export interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

export interface TopBarProps{
    children: string;
    width: string;
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
}