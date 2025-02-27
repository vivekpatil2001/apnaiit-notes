import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn from Scratch",
    imgSrc: "img/learn.png",
    description: (
      <>
      Empower your learning with Apna IIT! From beginners to experts , it is an open source project. You can contribute and learn more.
       {/* Apna IIT is an open source project. You can contribute to the project and help others to learn. */}
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imgSrc: "img/focuss.png",
    description: (
      <>
        For beginners, it is difficult to find the right resources to learn from. Apna IIT helps you to focus on what matters.
      </>
    ),
  },
  {
    title: "Open Source",
    imgSrc: "img/OS.png",
    description: (
      <>
      Join a vibrant open-source community. Learn, collaborate, and grow together! Contribute to the project and help others to learn.
       {/* Apna IIT helps you to learn various concepts of computer science from scratch in documentation format. */}
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}