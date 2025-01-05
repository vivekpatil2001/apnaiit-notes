import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { FaSearch } from 'react-icons/fa';

const technologyList = [
  { title: 'HTML', link: '/docs/category/html', logo: 'icon/html.png' },
  { title: 'CSS', link: '/docs/category/css', logo: 'icon/css.png' },
  { title: 'JavaScript', link: '/docs/category/javascript', logo: 'icon/js.png' },
  { title: 'React JS', link: '/docs/category/react-js', logo: 'icon/react.png' },
  { title: 'Tailwind CSS', link: '/docs/category/tailwind-css', logo: 'icon/tailwind.png' },
  { title: 'Bootstrap', link: '/docs/category/bootstrap', logo: 'icon/tailwind.png' },
  { title: 'MongoDB', link: '/docs/category/mongodb', logo: 'icon/machinelearning.png' },
  { title: 'Node JS', link: '/docs/category/node--js', logo: 'icon/nodejs.png' },
  { title: 'Express JS', link: '/docs/category/express-js', logo: 'icon/nodejs.png' },
  { title: 'Machine Learning', link: '/docs/category/machine-learning', logo: 'icon/machinelearning.png' },
  { title: 'DSA', link: '/docs/category/data-structure', logo: 'icon/machinelearning.png' },
  { title: 'C', link: '/docs/category/c', logo: 'icon/c.png' },
  { title: 'C++', link: '/docs/category/c-1', logo: 'icon/c++.png' },
  { title: 'Java', link: '/docs/category/java', logo: 'icon/java.png' },
  { title: 'Spring Boot', link: '/docs/category/springboot', logo: 'icon/springboot.png' },
  { title: 'Python', link: '/docs/category/python', logo: 'icon/python.png' },
  { title: 'Flask', link: '/docs/category/flask', logo: 'icon/flask.png' },
  { title: 'Django', link: '/docs/category/django', logo: 'icon/django.png' },
  { title: 'Docker', link: '/docs/category/docker', logo: 'icon/docker.png' },
  { title: 'Roadmaps', link: '/docs/category/roadmaps', logo: 'icon/roadmap.png' },
];

function TechnologyCard({ title, link, logo }) {
  return (
    <div className={clsx('col col--3', styles.cardContainer)}>
      <Link to={link} className={styles.card}>
        <div className={styles.cardContent}>
          {logo && <img src={logo} alt={`${title} logo`} className={styles.cardLogo} />}
          <Heading as="h3" className={styles.cardHeading}>{title}</Heading>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader({ searchQuery, setSearchQuery }) {
  const { siteConfig } = useDocusaurusContext();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search notes..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTechnologies = technologyList.filter((tech) =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {filteredTechnologies.length > 0 ? (
                filteredTechnologies.map((tech, idx) => (
                  <TechnologyCard key={idx} {...tech} />
                ))
              ) : (
                <p>No results found.</p>
              )}
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
