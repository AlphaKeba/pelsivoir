<script>
  import HeaderIvoire from "$lib/HeaderIvoire.svelte";
  import HeroIvoire from "$lib/HeroIvoire.svelte";
  import AboutIvoire from "$lib/AboutIvoire.svelte";
  import ServicesIvoire from "$lib/ServicesIvoire.svelte";
  import CallToActionIvoire from "$lib/CallToActionIvoire.svelte";
  import ContactIvoire from "$lib/ContactIvoire.svelte";
  import FooterIvoire from "$lib/FooterIvoire.svelte";
</script>

<svelte:head>

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />

  <!-- Title -->
  <title>Pels Ivoire - Votre partenaire pour l'immobilier, le tourisme et l'imprimerie</title>


  <!-- Meta Description -->
  <meta name="description" content="Pels Ivoire offre des services de qualité en immobilier, tourisme et imprimerie en Côte d'Ivoire. Découvrez nos solutions adaptées à vos besoins." />

  <!-- Meta Keywords -->
  <meta name="keywords" content="immobilier, tourisme, imprimerie, Pels Ivoire, services en Côte d'Ivoire" />

  <!-- Meta Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Charset -->
  <meta charset="UTF-8" />

  <!-- Viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Language -->
  <meta http-equiv="Content-Language" content="fr" />

  <!-- Open Graph for Social Media -->
  <meta property="og:title" content="Pels Ivoire - Votre partenaire pour l'immobilier, le tourisme et l'imprimerie" />
  <meta property="og:description" content="Pels Ivoire offre des services de qualité en immobilier, tourisme et imprimerie en Côte d'Ivoire." />
  <meta property="og:image" content="/path/to/your-image.jpg" />
  <meta property="og:url" content="https://www.pelsivoire.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card for Social Media -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pels Ivoire - Votre partenaire pour l'immobilier, le tourisme et l'imprimerie" />
  <meta name="twitter:description" content="Pels Ivoire offre des services de qualité en immobilier, tourisme et imprimerie en Côte d'Ivoire." />
  <meta name="twitter:image" content="/path/to/your-image.jpg" />



  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pels Ivoire",
      "url": "https://www.pelsivoire.com",
      "logo": "https://www.pelsivoire.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+225-0749561951",
        "contactType": "Customer Service",
        "areaServed": "CI",
        "availableLanguage": "French"
      },
      "sameAs": [
        "https://www.facebook.com/pelsivoire",
        "https://twitter.com/pelsivoire"
      ]
    }
  </script>
</svelte:head>

<HeaderIvoire />
<HeroIvoire />
<AboutIvoire />
<ServicesIvoire />
<CallToActionIvoire />
<ContactIvoire />
<FooterIvoire />
