<script>
    export let data = {
        title: "PELS Ivoire",
        description: "Bienvenue sur la plateforme officielle de PELS Ivoire.",
        favicon: "/favicon.ico"
    };
</script>

<svelte:head>
    <!-- Titre statique de la page -->
    <title>{data.title}</title>

    <!-- Description statique de la page -->
    <meta name="description" content={data.description} />

    <!-- Favicon statique -->
    <link rel="icon" href={data.favicon} />
</svelte:head>

<!-- Contenu de la page -->
<slot />
