import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from './components/config.module.css';

const config: DocsThemeConfig = {
  logo: 
  <div className={styles.logoTextContainer}>
    <img className={styles.logo} src="https://pbs.twimg.com/profile_images/1647117613321928704/ms5nHqvU_400x400.jpg" alt="flywheel logo"  />
    <span>docs</span>
  </div>,
  project: {
    link: 'https://github.com/dylanintech/flywheel-leaderboard',
  },
  chat: {
    link: 'https://discord.gg/X4Y3tGus',
  },
  docsRepositoryBase: 'https://github.com/dylanintech/flywheel-docs',
  footer: {
    text: 'flywheel docs',
  },
}

export default config
