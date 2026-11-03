// Developer-only tank: server authorizes scroll zoom for this class.
(() => {
    const defs = window.defExport;
    defs.scrollscope = {
        PARENT: [defs.basic],
        LABEL: "Scrollscope",
        DANGER: 10,
        BODY: { FOV: 1.2 },
        UPGRADES_TIER_1: [],
        UPGRADES_TIER_2: [],
        UPGRADES_TIER_3: [],
        UPGRADES_TIER_4: []
    };
    // Keep it on the first Developer page.
    defs.testbed.UPGRADES_TIER_4.unshift(defs.scrollscope);
})();
