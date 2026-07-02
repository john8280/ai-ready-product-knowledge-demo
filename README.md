# AI-Ready Product Knowledge Demo

This project demonstrates how product knowledge can be structured and presented to optimize for **Search Engine Optimization (SEO)**, **Answer Engine Optimization (AEO)**, **AI Search**, **Customer Support**, and **Sales Enablement**.

## Purpose

The primary goal of this demo is to showcase a practical implementation of AI-ready product knowledge. It illustrates how a small, representative dataset of AV equipment can be transformed into a valuable resource for various AI-driven applications, moving beyond theoretical concepts to tangible examples.

## Theme: DJ / AV Speaker Selector

The demo focuses on a DJ/AV Speaker Selector theme, using a curated set of audio-visual products. This theme allows for clear examples of product specifications, use cases, and compatibility, which are crucial for structured data applications.

## Technologies Used

- **React + Vite**: For a fast, modern, and static frontend application.
- **JSON Dataset**: A small, fake dataset to represent product information without needing a complex backend or database.
- **Tailwind CSS**: For rapid and consistent styling.
- **Wouter**: A minimalist React router for client-side navigation.
- **GitHub Pages**: For static site hosting and easy deployment.

## Demo Features

### 1. Product Listing & Filtering

The homepage (`/`) provides a browsable list of AV products with basic search and filtering capabilities by category and venue size. Each product card offers a quick overview and links to detailed product pages.

### 2. SEO View (`/seo`)

This section highlights SEO best practices implemented within the demo:

- **Meta Titles & Descriptions**: Examples of optimized meta tags for each product and page.
- **Clean URLs**: Semantic and human-readable URL structures.
- **Internal Linking**: Demonstrates how related products and categories are linked to improve site structure and authority.
- **Semantic HTML**: Proper use of HTML5 elements for better search engine understanding.

### 3. AEO View (`/aeo`)

Focuses on Answer Engine Optimization, showcasing how content is prepared for direct answers in AI-powered search results:

- **Answer-Ready FAQs**: Each product includes specific question-and-answer pairs designed to be easily extracted by answer engines.
- **Concise Responses**: Answers are brief and to the point, ideal for quick information retrieval.
- **Context & Authority**: Answers are attributed to specific products, establishing expertise.
- **FAQ Schema**: Illustrates the use of Schema.org `FAQPage` markup for machine readability.

### 4. AI Knowledge View (`/ai-knowledge`)

This page brings together all the elements that make the product knowledge AI-ready:

- **Structured Data**: Overview of how product data is structured (JSON, Schema.org).
- **Knowledge Graph Concepts**: Visual representation of product relationships and interconnections.
- **`llms.txt` Integration**: Explains the purpose and content of the `llms.txt` file, which guides Large Language Models (LLMs) on how to interact with and understand the site's content.

### 5. `llms.txt` Sample (`/llms.txt`)

A dedicated file (`/llms.txt`) is provided at the root of the site. This file serves as a directive for AI crawlers and LLMs, similar to `robots.txt` for search engines. It outlines the site's structure, key content areas, and how product knowledge is organized, enabling more intelligent and context-aware AI interactions.

## Data Structure (JSON)

The demo uses a simple JSON array of product objects. Each product includes fields such as:

- `id`: Unique identifier
- `name`: Product name
`category`: Product category (e.g., "Powered PA Speakers", "Subwoofers")
- `description`: Brief product description
- `useCase`: Primary applications
- `venueSize`: Recommended audience size
- `power`: Wattage/power output
- `inputs`: Available input types
- `portability`: Ease of transport
- `bestFor`: Target user/scenario
- `compatibleAccessories`: Related products
- `faqAnswers`: Object containing Q&A pairs for AEO
- `schema`: JSON-LD markup for Schema.org integration

## Architecture Overview

```mermaid
graph TD
    A[Product Data (JSON)] --> B{Structured Answers}
    B --> C[SEO View (Meta Tags, URLs)]
    B --> D[AEO View (FAQs, Snippets)]
    B --> E[AI Knowledge View (Schema, llms.txt)]
    C --> F[Search Engines]
    D --> G[Answer Engines]
    E --> H[LLMs & AI Applications]
    F --> I[Customer Support]
    G --> I
    H --> I
    I --> J[Sales Enablement]
```

## Getting Started (Development)

To run this project locally:

1. Clone the repository:
   ```bash
   gh repo clone <your-github-username>/ai-ready-product-knowledge-demo
   cd ai-ready-product-knowledge-demo
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

This project is designed for deployment on GitHub Pages. To deploy:

1. Ensure your repository is public.
2. In your GitHub repository settings, navigate to "Pages".
3. Select the `gh-pages` branch (which will be created upon your first deployment build) as the source and `/root` as the folder.
4. Build the project:
   ```bash
   pnpm run build
   ```
5. Deploy to GitHub Pages (using `gh-pages` package, which is already included):
   ```bash
   pnpm deploy
   ```

## Conclusion

This demo serves as a foundational example of how to build AI-ready product knowledge. By focusing on structured data, semantic markup, and clear content organization, businesses can significantly enhance their discoverability across traditional search, answer engines, and emerging AI platforms. This approach not only improves customer experience but also streamlines internal operations for support and sales teams.

**Author**: Marruffo AI
**Date**: June 30, 2026
