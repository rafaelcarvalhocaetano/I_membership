import file from '../assets/icons/file.svg';
import cloud from '../assets/icons/cloud.svg';
import experiments from '../assets/icons/experiments.svg';
import sketch from '../assets/icons/sketch.svg';
import security from '../assets/icons/security.svg';
import ownership from '../assets/icons/ownership.svg';
import test from '../assets/icons/test.svg';
import colors from '../assets/icons/colors.svg';


export const routers = [
  {
    path: '/',
    icon: file,
    name: 'Overview'
  },
  {
    path: '/cloud',
    icon: cloud,
    name: 'Clound'
  },
  {
    path: '/sketch',
    icon: sketch,
    name: 'sketch'
  },
  {
    path: '/experiments',
    icon: experiments,
    name: 'Experiments'
  },
  {
    path: '/security',
    icon: security,
    name: 'Security'
  },
  {
    path: '/ownership',
    icon: ownership,
    name: 'Ownership'
  },
  {
    path: '/ab-test',
    icon: test,
    name: 'A/B-test'
  },
  {
    path: '/colors',
    icon: colors,
    name: 'Colors'
  },
];