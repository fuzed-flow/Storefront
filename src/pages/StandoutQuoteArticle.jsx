import React from 'react';
import { Link } from 'react-router-dom';

export const standoutQuoteSections = [
  [
    "your-brand",
    "Make the quote look like your business"
  ],
  [
    "clear-scope",
    "Organize the scope so the client can follow it"
  ],
  [
    "client-choices",
    "Customize the proposal around the decision"
  ],
  [
    "product-catalogue",
    "Bring your own product catalogue into the quote"
  ],
  [
    "build-trust",
    "Build trust with photos and supporting documents"
  ],
  [
    "professional-finish",
    "Give the whole quote a professional finish"
  ],
  [
    "questions",
    "Common questions"
  ],
  [
    "next-quote",
    "Make your next quote a better introduction to your business"
  ]
];

export default function StandoutQuoteArticle() {
  return <>
    <div className="ff-blog-intro">
      <p>Before a client decides whether to hire you, your quote gives them a preview of how you work.</p>
      <p>Is the scope easy to understand? Does the presentation reflect your business? Can they see the products, options and supporting information they need to make a decision?</p>
      <p>A well-prepared quote helps answer those questions. It brings your pricing, experience and proposed work together in a document the client can follow.</p>
      <p><strong>FuzedFlow includes the quote branding and customization features covered in this guide on every plan: Starter, Professional and Business.</strong></p>
    </div>
    <section id="your-brand">
      <h2>1. Make the quote look like your business</h2>
      <p>Your quote should feel like it came from your company.</p>
      <p>With FuzedFlow, you can add your logo, use your brand colours and choose a hero image that introduces the proposed work. A relevant project photo can set the tone before the client reaches the scope and pricing.</p>
      <p>For example, a kitchen renovation quote could open with a photograph of a kitchen your team completed. Your logo and colours give the document a consistent identity, while the image helps show the kind of work you do.</p>
      <p>Personalization also comes through in the writing. Address the client’s project directly and explain what you understand about their goals.</p>
      <p>“We’ve prepared this proposal around your plans for a brighter kitchen, more storage and a layout that works better for your family” gives the quote a more personal opening.</p>
    </section>
    <section id="clear-scope">
      <h2>2. Organize the scope so the client can follow it</h2>
      <p>A client should be able to understand where the money is going.</p>
      <p>Build your quote around the job, with multiple rooms or phases and the line items needed to explain each part of the work.</p>
      <p>For a renovation involving a kitchen, bathroom and laundry room, give each space its own section. Within those sections, describe the demolition, plumbing, electrical, finishes and installation work that applies.</p>
      <p>Choose the descriptions, photos and pricing detail you include in the client-facing quote. Keep the presentation focused on what helps the client understand the proposed work.</p>
      <p>Compare these two descriptions:</p>
      <ul className="ff-blog-checklist"><li><strong>Kitchen renovation:</strong> Supply and install new kitchen.</li><li><strong>Kitchen installation:</strong> Install the selected base and wall cabinets, fit panels and toe kicks, and adjust doors and drawers.</li></ul>
      <p>The second gives the client a clearer picture of what they are reviewing.</p>
      <figure className="ff-blog-product-image">
        <img src="/images/blog/quote-builder-scope.webp" width="1440" height="829" loading="lazy" decoding="async" alt="FuzedFlow quote builder showing a hero banner, introduction field and the area for adding phases or rooms."/>
        <figcaption>Product screenshot: organize the hero image, introduction and rooms in the quote builder. <Link to="/features/estimating">Explore quoting →</Link></figcaption>
      </figure>
    </section>
    <section id="client-choices">
      <h2>3. Customize the proposal around the decision</h2>
      <p>Every client has different priorities. Some want a fixed scope. Others are deciding between finishes, upgrades or additional work.</p>
      <p>Optional line items and phases let you present those choices clearly. Keep the base scope understandable and show additions separately so the client can see how their selections affect the total.</p>
      <p>For example, a bathroom quote could include the agreed shower renovation, with heated flooring presented as an optional upgrade.</p>
      <p>You can also write your own:</p>
      <ul className="ff-blog-checklist"><li>Introduction and client message.</li><li>Scope descriptions and project notes.</li><li>Terms and conditions.</li><li>Payment schedule.</li></ul>
      <p>That gives you room to explain your process, responsibilities and payment stages in language that reflects your business.</p>
    </section>
    <section id="product-catalogue">
      <h2>4. Bring your own product catalogue into the quote</h2>
      <p>The products you use regularly should be easy to bring into a new estimate.</p>
      <p>FuzedFlow lets you build your own product catalogue, organize items into categories and add them to quotes. Keep useful product information together, including images, supplier details and costs.</p>
      <p>A renovation contractor might maintain categories for flooring, plumbing fixtures, lighting and cabinetry. Reusing those records gives familiar work a starting point while leaving room to adjust quantities and review current prices for each job.</p>
      <p>You can also mark relevant quote items for material tracking. When preparing the project, carry selected items into the project material list so the team can follow what needs ordering and what has arrived.</p>
      <p>The quote becomes a useful starting point for organizing the work after approval.</p>
      <p><Link to="/features/pricebook">Explore the product catalogue</Link> · <Link to="/features/project-materials">Explore material tracking</Link></p>
    </section>
    <section id="build-trust">
      <h2>5. Build trust with photos and supporting documents</h2>
      <p>Clients are assessing your company as well as your price.</p>
      <p>Photos of relevant past projects help them see your workmanship and understand what you are proposing. Choose examples that relate to their job, such as a similar shower layout, kitchen finish or fireplace installation.</p>
      <p>Supporting documents can answer questions before they become another email exchange. Depending on the project, include:</p>
      <ul className="ff-blog-checklist"><li>Workmanship warranty information.</li><li>Relevant licence and insurance documents.</li><li>Company brochures or manufacturer product brochures.</li><li>Plans and drawings.</li><li>Product specifications and care information.</li></ul>
      <p>Choose documents that help the client assess your proposal. A relevant warranty document or clear drawing is more useful than a collection of unrelated attachments.</p>
      <p>Together, your scope, photos and documents give the client more information to base their decision on.</p>
    </section>
    <section id="professional-finish">
      <h2>6. Give the whole quote a professional finish</h2>
      <p>A professional appearance comes from the details working together.</p>
      <p>Your branding, section headings, descriptions, product images, options and terms should make the quote easy to read from beginning to end.</p>
      <p>Before sending it, review the client’s version:</p>
      <ul className="ff-blog-checklist"><li>Is the proposed work clear?</li><li>Are the included items and optional upgrades easy to distinguish?</li><li>Do the photos support the scope?</li><li>Are the terms and payment stages easy to find?</li><li>Have you included the relevant documents?</li><li>Does the finished quote look consistent and complete?</li></ul>
      <p>A good-looking quote earns attention. Clear content helps the client decide what to do next.</p>
    </section>
    <section id="questions">
      <h2>Common questions</h2>
      <h3>Are these quoting features included on every FuzedFlow plan?</h3>
      <p>Yes. The quote branding, scope-building and customization features described here are included on Starter, Professional and Business. You can create a professional proposal from the plan that suits your team and project needs.</p>
      <h3>Can I use my own products and wording?</h3>
      <p>Yes. Add products from your own catalogue and write your own introduction, scope descriptions and terms. Reusable records give you a starting point; you can tailor the quote to each client.</p>
      <h3>Can clients choose optional upgrades?</h3>
      <p>Yes. Present optional items or phases separately so clients can review their choices and the resulting total before approving.</p>
      <p><Link to="/pricing">Compare plans and current user and project allowances →</Link></p>
    </section>
    <section id="next-quote">
      <h2>Make your next quote a better introduction to your business</h2>
      <p>Your quote is often one of the first detailed experiences a client has with your company. Give them a clear explanation of the work, relevant proof of your experience and a professional presentation that feels like your business.</p>
      <p><strong>These quoting tools are included on every FuzedFlow plan.</strong></p>
      <p><Link to="/features/estimating">Explore FuzedFlow’s quoting features</Link> or <Link to="/contact">request a walkthrough</Link> using a quote like the ones you prepare every week.</p>
    </section>
  </>;
}

