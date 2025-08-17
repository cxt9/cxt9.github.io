# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website for Doron Goldberg, hosted on GitHub Pages at https://cxt9.github.io/. Features a modern, tech-focused design emphasizing AI/ML expertise, risk management, and engineering leadership.

## Technology Stack

- **HTML5** - Single-page application with smooth scrolling sections
- **CSS3** - Custom dark theme with CSS variables, animations, and responsive design
- **Vanilla JavaScript** - Pure JS for performance, no jQuery dependencies
- **Font Awesome 6** - Icon library for UI elements
- **Google Fonts** - Inter and JetBrains Mono typography

## Architecture

### File Structure

- `index.html` - Main single-page application
- `assets/css/style.css` - Custom CSS with dark theme and animations
- `assets/js/main.js` - Vanilla JavaScript for interactions and animations
- `assets/webfonts/` - Font Awesome webfont files
- `images/` - Profile and background images
- `Doron Goldberg June 2025.pdf` - Resume PDF for download

### Key Features

- **AI/ML Focus**: Dedicated section highlighting AWS Bedrock, LLM, RAG, MCP expertise
- **Dark Theme**: Professional tech-focused design with gradient accents
- **Smooth Animations**: Intersection Observer for scroll animations, typing effects
- **Mobile Responsive**: Hamburger menu and responsive grid layouts
- **Performance Optimized**: RequestAnimationFrame for scroll events, image preloading

## Development Commands

This is a static website optimized for GitHub Pages:

1. **Local Development**: Use a local web server (e.g., `python -m http.server 8000` or VS Code Live Server)
2. **GitHub Pages**: Automatically deployed from main branch at https://cxt9.github.io/
3. **No Build Process**: Direct HTML/CSS/JS - no compilation needed

## Key Sections

- **Hero**: Animated introduction with typing effect and particle animation
- **About**: Professional summary with credentials
- **AI Expertise**: Four cards highlighting LLM, RAG, Agents, and Risk Assessment
- **Experience**: Timeline of professional roles
- **Tech Stack**: Categorized technology skills
- **Contact**: Links to email, phone, LinkedIn, and GitHub

## Maintenance Notes

- Profile image: `images/me.jpg`
- Resume PDF: Update `Doron Goldberg June 2025.pdf` as needed
- All content is from actual resume - no placeholder text
- CSS variables in `:root` for easy theme customization
- Mobile breakpoint at 768px