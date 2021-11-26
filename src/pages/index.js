import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="Baking Background"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Recipes</h1>
              <h4>Things and Stuff</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
