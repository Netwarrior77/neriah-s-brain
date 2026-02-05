export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export enum GameSection {
  INTRO = 0,
  MEMORY = 1, // About
  LAB = 2,    // Projects
  LINK = 3    // Contact
}

export interface PlayerState {
  isMoving: boolean;
  direction: 'left' | 'right';
  currentSection: number;
}
