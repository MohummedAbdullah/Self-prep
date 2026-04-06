export interface TechnicalTerm {
  term: string;
  definition: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
}

export interface Topic {
  title: string;
  description: string;
  content: string;
  code?: string;
  language?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
}

export interface Question {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const htmlCssData = {
  technicalTerms: [
    {
      term: 'DOM (Document Object Model)',
      definition: 'A programming interface for web documents that represents the page structure as a tree of objects, allowing scripts to manipulate content, structure, and styles dynamically.',
      category: 'Core Concepts',
      importance: 'high'
    },
    {
      term: 'Semantic HTML',
      definition: 'Using HTML elements that convey meaning about the content (like <header>, <nav>, <article>) rather than purely presentational elements, improving accessibility and SEO.',
      category: 'HTML',
      importance: 'high'
    },
    {
      term: 'CSS Specificity',
      definition: 'The algorithm browsers use to determine which CSS rule applies when multiple rules target the same element. Calculated as (ID selectors, class selectors, type selectors).',
      category: 'CSS',
      importance: 'high'
    },
    {
      term: 'Box Model',
      definition: 'The rectangular boxes generated for elements consisting of content, padding, border, and margin. Understanding it is crucial for layout control.',
      category: 'CSS',
      importance: 'high'
    },
    {
      term: 'Flexbox',
      definition: 'A one-dimensional layout method for arranging items in rows or columns with powerful alignment and distribution capabilities.',
      category: 'CSS Layout',
      importance: 'high'
    },
    {
      term: 'CSS Grid',
      definition: 'A two-dimensional layout system for handling both rows and columns simultaneously, enabling complex grid-based layouts.',
      category: 'CSS Layout',
      importance: 'high'
    },
    {
      term: 'Media Queries',
      definition: 'CSS technique using @media rule to apply styles based on device characteristics like viewport width, enabling responsive design.',
      category: 'Responsive Design',
      importance: 'high'
    },
    {
      term: 'Viewport',
      definition: 'The visible area of a web page on a device. The viewport meta tag controls layout on mobile browsers.',
      category: 'Responsive Design',
      importance: 'high'
    },
    {
      term: 'z-index',
      definition: 'CSS property controlling the vertical stacking order of positioned elements. Higher values appear in front of lower values.',
      category: 'CSS',
      importance: 'medium'
    },
    {
      term: 'Pseudo-classes',
      definition: 'Keywords added to selectors that specify a special state (e.g., :hover, :focus, :nth-child) to style elements under certain conditions.',
      category: 'CSS',
      importance: 'medium'
    },
    {
      term: 'Pseudo-elements',
      definition: 'Keywords allowing you to style specific parts of an element (e.g., ::before, ::after, ::first-letter) or insert content.',
      category: 'CSS',
      importance: 'medium'
    },
    {
      term: 'ARIA (Accessible Rich Internet Applications)',
      definition: 'A set of attributes that define ways to make web content more accessible to people with disabilities, especially those using screen readers.',
      category: 'Accessibility',
      importance: 'high'
    },
    {
      term: 'CSS Variables (Custom Properties)',
      definition: 'Entities defined by CSS authors containing specific values to be reused throughout a document, declared with -- prefix and accessed with var().',
      category: 'CSS',
      importance: 'medium'
    },
    {
      term: 'Critical CSS',
      definition: 'The CSS needed to render above-the-fold content, inlined in the HTML head to improve perceived page load performance.',
      category: 'Performance',
      importance: 'medium'
    },
    {
      term: 'BEM (Block Element Modifier)',
      definition: 'A naming convention methodology for CSS classes that creates reusable components and code sharing in front-end development.',
      category: 'Methodology',
      importance: 'medium'
    },
    {
      term: 'Stacking Context',
      definition: 'A 3D conceptualization of HTML elements where z-index only works within the same stacking context.',
      category: 'CSS',
      importance: 'high'
    },
    {
      term: 'Accessibility Tree',
      definition: 'The semantic representation of the DOM used by assistive technologies like screen readers.',
      category: 'Accessibility',
      importance: 'medium'
    },
    {
      term: 'Cascade Layers',
      definition: 'A CSS feature that lets you define explicit layer ordering with @layer to control the cascade.',
      category: 'CSS',
      importance: 'medium'
    },
    {
      term: 'Container Queries',
      definition: 'Style elements based on their container size rather than the viewport.',
      category: 'Responsive Design',
      importance: 'medium'
    }
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'CSS Specificity Hierarchy',
      description: 'Understanding how browsers calculate which styles to apply',
      content: `CSS specificity follows a hierarchy where more specific selectors override less specific ones:

**Specificity Calculation:** (ID selectors, Class selectors, Type selectors)

- **Inline styles** (1000 points): style="color: red"
- **IDs** (100 points): #header { }
- **Classes, attributes, pseudo-classes** (10 points): .class, [type="text"], :hover
- **Elements, pseudo-elements** (1 point): div, ::before, ::after

**The !important Rule:**
- Overrides all specificity calculations
- Should be used sparingly as it breaks the natural cascade
- Creates maintenance issues

**Best Practices:**
- Keep selectors as flat as possible
- Avoid over-qualifying selectors (e.g., div.container instead of .container)
- Use class-based styling over element-based when possible
- Consider using CSS methodology like BEM to manage specificity`,
      code: `/* Specificity: 0,1,0 */
.header { color: blue; }

/* Specificity: 0,1,1 */
nav.header { color: green; }

/* Specificity: 1,0,0 */
#main { color: red; }

/* Specificity: 1,0,1 - wins! */
#main.header { color: purple; }

/* Inline style: 1,0,0,0 - overrides everything */
<div style="color: orange">Content</div>`,
      language: 'css'
    },
    {
      title: 'Flexbox Layout',
      description: 'One-dimensional layout system for rows or columns',
      content: `Flexbox is designed for one-dimensional layouts—either a row or a column. It provides powerful alignment capabilities and is perfect for components and small-scale layouts.

**Key Properties:**

**Container (flex parent):**
- display: flex - Enables flex context
- flex-direction: row | column | row-reverse | column-reverse
- justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly (main axis alignment)
- align-items: flex-start | center | flex-end | stretch | baseline (cross axis alignment)
- flex-wrap: nowrap | wrap | wrap-reverse
- align-content: (works like justify-content for multi-line flex containers)

**Items (flex children):**
- flex-grow: number - How much item grows relative to others
- flex-shrink: number - How much item shrinks relative to others
- flex-basis: length | auto - Initial size before free space distribution
- align-self: (overrides align-items for individual item)
- order: number - Controls visual order (doesn't affect source order)`,
      code: `/* Flex Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Flex Items */
.item {
  flex: 1 1 200px; /* grow shrink basis */
}

.item-wide {
  flex-grow: 2; /* Takes twice the space */
}

/* Common Centering Pattern */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
      language: 'css'
    },
    {
      title: 'CSS Grid Layout',
      description: 'Two-dimensional layout system for complex designs',
      content: `CSS Grid Layout is the most powerful layout system available in CSS. It's a 2-dimensional system—handling both columns and rows—unlike Flexbox which is 1-dimensional.

**Key Concepts:**

**Grid Container:**
- display: grid - Creates a grid context
- grid-template-columns/rows - Defines track sizes
- grid-gap/gap - Sets spacing between tracks
- grid-template-areas - Named grid areas for intuitive placement

**Grid Items:**
- grid-column/row - Shorthand for start/end lines
- grid-area - Position by name or line numbers
- justify-self/align-self - Item alignment within cell

**Fractional Units (fr):**
- Distributes available space proportionally
- 1fr takes equal share, 2fr takes twice as much
- Combines with fixed sizes (px, rem) seamlessly`,
      code: `/* Basic Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Named Areas Layout */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }`,
      language: 'css'
    },
    {
      title: 'Semantic HTML & Accessibility',
      description: 'Writing meaningful markup for better accessibility and SEO',
      content: `Semantic HTML uses elements that describe their meaning to both the browser and the developer. This improves accessibility, SEO, and code maintainability.

**Key Semantic Elements:**

**Document Structure:**
- <header> - Introductory content, navigation
- <nav> - Navigation links
- <main> - Primary content (one per page)
- <article> - Self-contained content
- <section> - Thematic grouping
- <aside> - Tangentially related content
- <footer> - Footer content

**Text Content:**
- <h1> through <h6> - Heading hierarchy
- <p> - Paragraphs
- <ul>, <ol>, <li> - Lists
- <figure> and <figcaption> - Self-contained media

**Benefits:**
- Screen readers can navigate by landmarks
- Better SEO rankings
- Easier to maintain and style
- Reduced need for ARIA in many cases

**ARIA When Needed:**
- aria-label - Provides accessible name
- aria-describedby - Links to description
- role - Defines element purpose
- aria-hidden - Hides decorative elements`,
      code: `<!-- Semantic Structure -->
<body>
  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Content...</p>
      
      <figure>
        <img src="photo.jpg" alt="Description" />
        <figcaption>Image caption</figcaption>
      </figure>
    </article>
  </main>
  
  <aside>
    <h2>Related Links</h2>
    <ul>...</ul>
  </aside>
  
  <footer>
    <p>&copy; 2024 Company</p>
  </footer>
</body>`,
      language: 'html'
    },
    {
      title: 'Responsive Design & Media Queries',
      description: 'Creating layouts that work across all device sizes',
      content: `Responsive web design ensures your application looks good on all devices by adapting the layout to different screen sizes.

**Core Techniques:**

**Viewport Meta Tag:**
Essential for mobile browsers to render pages at proper width

**Media Query Syntax:**
- @media screen and (min-width: 768px) { }
- @media screen and (max-width: 767px) { }
- @media screen and (min-width: 768px) and (max-width: 1024px) { }

**Mobile-First vs Desktop-First:**
- Mobile-first: Start with base styles for mobile, use min-width queries
- Desktop-first: Start with desktop styles, use max-width queries
- Mobile-first is now the recommended approach

**Common Breakpoints:**
- Small: 576px
- Medium: 768px  
- Large: 992px
- Extra Large: 1200px
- Extra Extra Large: 1400px

**Modern Approaches:**
- Container Queries: Style based on container size, not viewport
- CSS Clamp(): Responsive values without media queries
- Aspect-ratio: Maintain proportions`,
      code: `/* Viewport Meta Tag in HTML head */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Mobile-First Approach */
/* Base styles for mobile */
.card {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media screen and (min-width: 768px) {
  .card {
    width: 50%;
    padding: 1.5rem;
  }
}

/* Desktop */
@media screen and (min-width: 1024px) {
  .card {
    width: 33.333%;
    padding: 2rem;
  }
}

/* Modern: Container Queries */
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* Modern: Fluid Typography */
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}`,
      language: 'css'
    }
  ] as Topic[],

  questions: [
    {
      question: 'What is the CSS Box Model?',
      answer: `The CSS Box Model is a box that wraps around every HTML element. It consists of:

1. **Content** - The actual content of the box (text, images, etc.)
2. **Padding** - Clears an area around the content (inside the border)
3. **Border** - A border that goes around the padding
4. **Margin** - Clears an area outside the border

**Box-sizing property:**
- content-box (default): Width/height applies only to content
- border-box: Width/height includes padding and border

Using border-box is generally recommended as it makes sizing more intuitive:

\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\``,
      difficulty: 'easy'
    },
    {
      question: 'What is the difference between inline, block, and inline-block elements?',
      answer: `**Block Elements:**
- Always start on a new line
- Take up full width available
- Can have width/height, margin, and padding
- Examples: <div>, <p>, <h1>-<h6>, <section>

**Inline Elements:**
- Do not start on a new line
- Only take up as much width as necessary
- Cannot have width/height, vertical margins
- Examples: <span>, <a>, <strong>, <em>

**Inline-block Elements:**
- Flow inline like inline elements
- Can have width/height, margins like block elements
- Respects vertical margins and padding
- Examples: <img>, <input>, <button>, or any element with display: inline-block

**Use cases:**
- Block: Layout containers, structural elements
- Inline: Styling text within paragraphs
- Inline-block: Navigation menus, button groups, image galleries`,
      difficulty: 'easy'
    },
    {
      question: 'Explain CSS specificity and how it works.',
      answer: `CSS specificity determines which CSS rule applies when multiple rules target the same element.

**Specificity Hierarchy (highest to lowest):**

1. **Inline styles** - style="color: red" (1,0,0,0)
2. **IDs** - #header (0,1,0,0)
3. **Classes, attributes, pseudo-classes** - .class, [type="text"], :hover (0,0,1,0)
4. **Elements, pseudo-elements** - div, ::before (0,0,0,1)

**Calculation:**
Specificity is calculated as: (ID count, Class count, Type count)

**Examples:**
- div#app.header { } → (1,1,1)
- #app .header { } → (1,1,0)
- div.header { } → (0,1,1)
- .header { } → (0,1,0)

**Important Notes:**
- More specific selectors override less specific ones
- !important overrides all specificity
- Equal specificity: last declared wins
- Universal selector (*) has no specificity`,
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between Flexbox and CSS Grid? When should you use each?',
      answer: `**Flexbox (Flexible Box Layout):**
- One-dimensional layout system
- Designed for layout in a single direction (row OR column)
- Content-first approach
- Best for: Navigation bars, centering elements, card layouts, form alignment

**CSS Grid:**
- Two-dimensional layout system
- Handles both rows AND columns simultaneously
- Layout-first approach
- Best for: Page layouts, dashboards, complex grid structures, masonry layouts

**Key Differences:**

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimension | 1D (row or column) | 2D (rows and columns) |
| Content | Adapts to content | Creates structure for content |
| Overlap | Requires positioning | Grid cells can overlap naturally |
| Alignment | Powerful for single axis | Powerful for both axes |

**When to use which:**

**Use Flexbox when:**
- Aligning items in a single direction
- Distributing space between items
- Centering elements vertically/horizontally
- Creating flexible components

**Use Grid when:**
- Creating overall page layout
- Need precise 2D control
- Working with overlapping content
- Building complex responsive layouts

**They work great together!**
\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
}

.navigation {
  display: flex;
  justify-content: space-between;
}
\`\`\``,
      difficulty: 'medium'
    },
    {
      question: 'How do you create a responsive layout without using media queries?',
      answer: `There are several modern CSS techniques to create responsive layouts without media queries:

**1. Flexbox with flex-wrap:**
\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 1 1 300px; /* Grow, shrink, basis */
}
\`\`\`

**2. CSS Grid with auto-fit/fill:**
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

**3. CSS Clamp() for fluid values:**
\`\`\`css
.fluid-text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}

.fluid-width {
  width: clamp(300px, 50%, 800px);
}
\`\`\`

**4. Container Queries:**
\`\`\`css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

**Benefits of media-query-free layouts:**
- Fewer breakpoints to maintain
- Smoother transitions between sizes
- More maintainable code
- Better component reusability`,
      difficulty: 'medium'
    },
    {
      question: 'Explain the difference between em, rem, px, and viewport units (vw/vh) in CSS.',
      answer: `**px (Pixels):**
- Absolute unit
- 1px = 1 device pixel (though on high-DPI screens may be scaled)
- Not relative to anything
- Use for: Borders, precise positioning

**em:**
- Relative to the font-size of the parent element
- Compounds (nested elements multiply)
- Use for: Component-scaled spacing, margins relative to text

**rem (Root em):**
- Relative to the root element's font-size (html)
- Does not compound
- Most predictable for consistent scaling
- Use for: Typography, spacing, component sizing

**vw/vh (Viewport Width/Height):**
- 1vw = 1% of viewport width
- 1vh = 1% of viewport height
- Responsive to browser window
- Use for: Hero sections, full-height layouts, fluid typography

**Comparison Example:**
\`\`\`css
html {
  font-size: 16px; /* Base size */
}

/* px - fixed size */
.fixed { width: 200px; }

/* rem - scales with root font-size */
.scalable { width: 12.5rem; } /* 200px at base */

/* em - scales with parent */
.parent { font-size: 20px; }
.parent .child { padding: 1em; } /* 20px */

/* vw - scales with viewport */
.fluid { width: 50vw; } /* Half of viewport width */
\`\`\`

**Best Practices:**
- Use rem for most sizing (accessible, predictable)
- Use em for component-scaled properties
- Use px for hairlines and borders
- Use vw/vh for viewport-relative layouts`,
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between pseudo-classes and pseudo-elements?',
      answer: `**Pseudo-classes** (selector:state):
- Define a special state of an element
- Use single colon (:)
- Keywords that start with colon

**Common Pseudo-classes:**
- :hover - Mouse over element
- :focus - Element has focus
- :active - Element being activated
- :nth-child(n) - nth child of parent
- :not(selector) - Elements not matching selector
- :is(), :where() - Matches any in list

**Pseudo-elements** (selector::part):
- Style specific parts of an element
- Use double colon (::) - CSS3 syntax
- Single colon works for backward compatibility

**Common Pseudo-elements:**
- ::before - Insert content before element
- ::after - Insert content after element
- ::first-line - First line of text
- ::first-letter - First letter of text
- ::placeholder - Input placeholder text
- ::selection - Selected text

**Key Differences:**

| Aspect | Pseudo-class | Pseudo-element |
|--------|--------------|----------------|
| Colon | Single (:) | Double (::) |
| Purpose | Special state | Part of element |
| Count | Multiple can apply | Only one applies |
| Content | Cannot add content | Can add content (::before/::after) |

**Examples:**
\`\`\`css
/* Pseudo-class */
button:hover {
  background: blue;
}

li:nth-child(odd) {
  background: #f5f5f5;
}

/* Pseudo-element */
p::first-letter {
  font-size: 2em;
}

.quote::before {
  content: '"';
  font-size: 2em;
}
\`\`\``,
      difficulty: 'easy'
    },
    {
      question: 'How would you optimize CSS for better performance?',
      answer: `CSS optimization strategies for better performance:

**1. Minimize CSS Size:**
- Remove unused CSS (PurgeCSS, UnCSS)
- Minify CSS (remove whitespace, comments)
- Use shorthand properties
\`\`\`css
/* Bad */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Good */
margin: 10px 20px;
\`\`\`

**2. Critical CSS:**
- Inline critical CSS in <head>
- Load non-critical CSS asynchronously
- Prioritize above-the-fold content

**3. Selector Optimization:**
- Keep selectors short and specific
- Avoid deep nesting
- Avoid universal selectors (*) when possible
\`\`\`css
/* Avoid */
.header .nav ul li a { }

/* Prefer */
.nav-link { }
\`\`\`

**4. Property Optimization:**
- Use transform and opacity for animations (GPU accelerated)
- Avoid expensive properties (box-shadow, border-radius) on animated elements
- Use will-change sparingly

**5. Loading Strategies:**
\`\`\`html
<!-- Preload critical CSS -->
<link rel="preload" href="critical.css" as="style">

<!-- Async load non-critical -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Media queries load conditionally -->
<link rel="stylesheet" href="print.css" media="print">
\`\`\`

**6. Modern Formats:**
- Use HTTP/2 for multiplexing
- Consider Critical CSS extraction
- Use CSS compression (Brotli, Gzip)

**7. Caching:**
- Use content hashing in filenames
- Set proper cache headers
- Separate vendor CSS from application CSS`,
      difficulty: 'hard'
    },
    {
      question: 'Explain CSS containment and when to use it.',
      answer: `CSS containment is a property that tells the browser that an element's subtree is independent of the rest of the page, allowing for optimization.

**contain property values:**

**1. layout**
- Element is invisible for layout purposes to its ancestors
- Prevents layout changes from affecting parent

**2. paint**
- Descendants don't display outside its bounds
- Creates a new stacking context

**3. size**
- Element can be laid out without checking children
- Requires explicit dimensions

**4. style**
- Property changes don't affect ancestors
- counters(), counters-reset not propagated

**5. content (shorthand)**
- Equivalent to: contain: layout paint

**6. strict (shorthand)**
- Equivalent to: contain: layout paint size

**7. none**
- No containment applied

**Use Cases:**
\`\`\`css
/* Widget that shouldn't affect page layout */
.widget {
  contain: layout;
}

/* Offscreen content */
.offscreen {
  contain: paint;
  position: absolute;
  left: -9999px;
}

/* Fixed-size component */
.component {
  contain: strict;
  width: 300px;
  height: 200px;
}

/* Third-party embed */
.embed {
  contain: content;
}
\`\`\`

**Benefits:**
- Improved rendering performance
- Isolated reflows/repaints
- Better performance for complex widgets

**Browser Support:**
- Well supported in modern browsers
- Fallback: browsers ignore unknown contain values`,
      difficulty: 'hard'
    },
    {
      question: 'What are CSS Container Queries and how do they differ from Media Queries?',
      answer: `Container queries are a modern CSS feature that allow you to style elements based on the size of their container, not the viewport.

**Media Queries Limitations:**
- Only respond to viewport size
- Component can't adapt to its container
- Forces one-size-fits-all approach

**Container Queries:**
- Respond to container size
- Components are truly reusable
- Encapsulated responsive design

**Syntax:**
\`\`\`css
/* Define container */
.container {
  container-type: inline-size; /* or size, normal */
  container-name: sidebar; /* optional name */
}

/* Query container */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

/* Named container query */
@container sidebar (min-width: 400px) {
  .widget {
    flex-direction: row;
  }
}
\`\`\`

**Container Types:**

1. **size**
   - Queries can respond to both width and height
   - Requires explicit size on container

2. **inline-size**
   - Queries respond to inline dimension (width in horizontal writing modes)
   - Most common use case

3. **normal**
   - No size containment
   - Style queries only

**Complete Example:**
\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  padding: 1rem;
}

/* Default: single column */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 1rem;
  }
}

@container card (min-width: 700px) {
  .card {
    grid-template-columns: 200px 1fr 100px;
  }
}
\`\`\`

**Container Units:**
- cqw: 1% of container width
- cqh: 1% of container height
- cqi: 1% of inline size
- cqb: 1% of block size

**Browser Support:**
- Chrome/Edge 105+
- Firefox 110+
- Safari 16+

**Benefits:**
- True component-level responsive design
- More maintainable code
- Better for design systems
- Component can adapt anywhere it's placed`,
      difficulty: 'hard'
    },
    {
      question: 'Explain how stacking contexts work and why z-index sometimes \"doesn\'t work.\"',
      answer: `Stacking contexts are created by positioned elements with z-index, opacity < 1, transforms, filters, and other properties. z-index only affects ordering within the same stacking context, so elements in different contexts won\'t overlap as expected. Debug by identifying which ancestor created a new context.`,
      difficulty: 'hard'
    },
    {
      question: 'How do layout, paint, and composite stages impact performance?',
      answer: `Layout recalculates element geometry, paint draws pixels, and composite combines layers. Layout and paint are expensive; prefer transform/opacity animations that only trigger compositing for smoother performance.`,
      difficulty: 'hard'
    }
  ] as Question[]
};
