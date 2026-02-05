import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Retro Render',
    description: 'A WebGL engine for rendering voxel graphics in real-time.',
    tech: ['React', 'Three.js', 'GLSL'],
  },
  {
    id: 'p2',
    title: 'BitWallet',
    description: 'Crypto dashboard with a minimalist 8-bit aesthetic.',
    tech: ['TypeScript', 'D3.js', 'Solidity'],
  },
  {
    id: 'p3',
    title: 'Pixel Chat',
    description: 'Real-time chat app using WebSockets and Redis.',
    tech: ['Node.js', 'Socket.io', 'Redis'],
  },
  {
    id: 'p4',
    title: 'Dungeon Gen',
    description: 'Procedural generation algorithm for RPG maps.',
    tech: ['Python', 'WASM', 'React'],
  }
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'Twitter', url: 'https://twitter.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Email', url: 'mailto:hello@example.com' },
];
