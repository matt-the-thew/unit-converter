# 🔄 Unit Converter

A sleek, responsive web application for converting between metric and imperial units. Built with modern web technologies, this project taught me core frontend development concepts through a simple interface for converting length, volume, and mass measurements. [Use the demo here](https://convert-units-test.netlify.app/).

## 🎯 Project Overview

This unit converter provides instant conversions for three essential measurement categories, in a limited, static format:

- **Length**: Meters ↔ Feet
- **Volume**: Liters ↔ Gallons  
- **Mass**: Kilograms ↔ Pounds

Simply enter a value and hit the convert button (or press Enter) to see all conversions calculated and displayed in real-time.

## 💻 Technologies & Educational Merit

### **HTML5**
- **Educational Value**: Understanding semantic markup teaches the importance of accessible, meaningful structure. This project uses proper document hierarchy (`<h3>`, `<p>`, `<button>`) and container semantics to organize the UI.
<br>
- **Key Features Used**: Meta tags for viewport configuration (responsive design), type-safe input elements, and semantic form structures that enhance both accessibility and SEO.

### **CSS3 (Flexbox Layout)**

- **Educational Value**: Mastering Flexbox is essential for modern responsive design. This project demonstrates how to center content, create multi-directional layouts, and build responsive containers without relying on outdated techniques like floats or positioning hacks.
<br>
- **Key Features Used**: Flex containers for layout, spacing with `justify-content` and `align-items`, custom styling for input spinners, hover/active states for interactivity, and Google Fonts integration for typography.
<br>
- **Design Patterns**: Box shadows for depth, border-radius for modern aesthetics, and a cohesive color scheme demonstrating UI/UX principles.

### **Vanilla JavaScript (ES6+)**

- **Educational Value**: Writing vanilla JavaScript teaches fundamental programming concepts: event listeners, DOM manipulation, function composition, and pure functions. No frameworks or abstractions obscure these core concepts.
<br>
- **Key Features Used:**
  - **Event Handling**: Click listeners and keyboard event detection (Enter key support) for intuitive UX
  - **DOM Querying & Manipulation**: `getElementById()` and `innerHTML` for dynamic content updates
  - **Pure Functions**: Each conversion function (`calcMetersToFeet`, etc.) is a pure function with clear inputs/outputs and mathematical precision
  - **String Interpolation**: Template literals for readable, maintainable output formatting
  - **Math Precision**: `Math.round()` for formatting conversions to 2 decimal places

### **Vite (Build Tool)**

- **Educational Value**: Understanding build tools teaches developers how modern applications are optimized for production. Vite demonstrates hot module replacement, efficient bundling, and dev server capabilities.
<br>
- **Key Features Used**: Module-based JavaScript architecture, fast development server for real-time feedback during development.

## 🚀 How to Use

1. **Install dependencies** (if needed):
   ```bash
   npm install
   ```

2. **Run the application**:
   - Simply open `index.html` in your browser, or
   - Use Vite for development: `npm run start`

3. **Convert units**:
   - Enter a value in the input field
   - Click the "Convert" button or press Enter
   - View all six conversions displayed instantly

## 🏗️ Project Architecture

```
index.html       → Semantic markup with input field and result containers
index.js         → Pure conversion functions and event handlers
main.css         → Flexbox-based responsive styling
package.json     → Project metadata and Vite configuration
```

## 📝 License

ISC

---

## 🙏 Special Thanks to Scrimba! 

This project was created with Scrimba's very nice fullstack dev course! They are really great, and I am enjoying their content a lot; I recommend them to any young developers! 🚀
