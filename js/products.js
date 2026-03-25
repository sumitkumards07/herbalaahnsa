const products = [
    {
        id: 'aloe-vera-gel',
        name: 'Pure Aloe Vera Gel',
        price: 1899,
        category: 'skincare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO_v3JS4SiOqn8EjGtHIQZ3n6lE5MO1J33TiFC21CqHU-yhAQ8cCYiKn-nNdms0HASND3Ejts5ugt-ebgw89sWDFtNje-SN2kMl44lqZO0yNjTDcSjQA_YC0Ri-RzKI9TI9cjgOciXPakBi7gUJbctfw1qJrgH0FuU8XX3gqQt4vKQ3PUsC__9j9O4pn66flo5PUqPMKJ_P3pW2jPuOHKDZmiXrJd59qDGqrFjNIPbeiHjLHeLc8JW8jmqasoVp-IuTOZ1dg3S',
        description: '100% Pure organic Aloe Vera. Soothes, hydrates, and heals.',
        featured: true
    },
    {
        id: 'neem-cleanser',
        name: 'Neem Leaf Cleanser',
        price: 1449,
        category: 'skincare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7NF0aMPH81ys0KIY6F0r7t7ptoZX1ex4Ro1m_OZyg2HjWfwTzijM239AB_PyhT18WWzpg7iiPLaAAyRgJiEl57rkgHQ4O9LI6OlJlIvmRDsQ49ByLrQrBqyxTJl5c83JY5kAbGr4WKITFjtZVLqaGa-sqtV_k8XpYyuO09uMPRfwauRg_JS0c75qAISCzTxWwwpO25bc_Ply2u5aHriLLPadnuhB4gtfdqV9UcMrc6cuJq2mkaGRnXrt3UjV4jA_YgK-oG8SR',
        description: 'Deeply cleanses pores and removes impurities with the power of Neem.',
        featured: true
    },
    {
        id: 'rose-water',
        name: 'Organic Rose Water',
        price: 1199,
        category: 'skincare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPD4sZw-_nPKWABf2gcktk0KTYMHHouTCkVk7B90cgkiQSNijH7PHiUHCjaNhTJfvLxCrqgOV7_kpZIBfuLJ8DIaDuQKhb_rJTg3Kql_mT6Kyt_jQIzCsuvOpPbgmPZNS9vXWeYUsfq610TiDXise2h3ybfccvScD9xZ_Tw-xqEFCxc-bGPD3ORZqMlY5-OCaixchlaTnIgT1Qxp0v_hMkdVm_f5er9l1INj53FK0cnetm71S4v6-I_Hkb0CBAwncQS7xXIWfD',
        description: 'Natural toner made from steam-distilled damask roses.',
        featured: true
    },
    {
        id: 'turmeric-scrub',
        name: 'Turmeric Brightening Scrub',
        price: 1749,
        category: 'skincare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagpHNRINIT4YXjRDV6FYn1D71984iNnz92CFg22IOF3ooHR-9TbOe5aOSuDsPDNWBgpLL6IZGU522azAU_K-7VZFfItK0gSnwKPxbhvsZptYIhxG8ncYYuBK68d5S6jyxM0wfPOrOWbLlEjFNGckXe89XSXtMG3cEnChbk7BM5TRcjpG6_dZzmbFviM1a0I_S6mwDXGhteYzS37VCLKvIDENTP7ynPUMSkpF2gTCDYk40GBH0amczqcgkpG91W9X6kAXZ-edc',
        description: 'Exfoliates and brightens skin with Turmeric and Sandalwood.',
        featured: true
    },
    {
        id: 'neem-powder',
        name: 'Organic Neem Powder',
        price: 1899,
        category: 'wellness',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6_K9cI-T8AQA-VzN6cDHN3Cg7z10PIZRjQwfj22aqUwwdLQJUrvWMB2Yzfk79tZAWvGsrQyqCnVqa8X9iMcQp64cl-lnxbvaG1rQWD1fLWBqwFDgOydX7K3f3uX3uj4KiWFZ9KjteXzxlubkLjtmu-LUpj56BFr7q1ZgpKeVNr4NzHpZTLfSNWKYt_IHnK1cTIYV75914S8OU2ASDeL-d1o8O7maD5nXC4eja_pQjHTXTLyaAwQ0YNbaLXB_avs-4wIWxsZdf',
        description: '100% Pure Indian Neem leaves. Ideal for detox and skin purification.'
    },
    {
        id: 'lavender-mist',
        name: 'Lavender Relief Mist',
        price: 1449,
        oldPrice: 1749,
        category: 'essential_oils',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc6E2-olp7-5BrLK2n7BXoZfwfkxc03ZuhWjPI4iBVWo6j9lVUX-0H90wd8ZrkQ2NjL8pNcDyQRLw2NxMYuo0G9xu5QQOlSestmYqe-VmtjoEiqhBhyojQIXQS3D0hoNw6_9z0VtIrHMImNTkuXHpIL2m6W77yWa3L4H1sTRId1HcXjDaRWktbMAqg0HXSZT9r6bbwkluKhg4spcDftjlrbtPiizqPH3FG2ABcFjXujNy5c026v7ZPue50U5f2I1QQTgqHtXO8',
        description: 'Calming aromatherapy spray for better sleep and anxiety relief.'
    },
    {
        id: 'detox-tea',
        name: 'Sunrise Detox Tea',
        price: 1199,
        category: 'tea',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRAmzwdaR1JtRQBLDi3zE7DRxkSo1Lsk9W1s6boBw4ECQMgWpvb5g8BTatX0svp8KwitY23V0lHfZSMBpBi6mD-YKVGCbpezHzwJ_y_x54LK36mlZbFQzyfbFLhFfi2UBUq2RjQR60TabHBaf7hXWtiFWNZl24PHV5BafYF9UUsr_J6Z3OnQMNsD7TZw4CNLWu674yVpis7F50FtbzaiilNZuoLE9evhoFSQZOew840r1A4pPbVw2gnMhYE5ffijHXkP4fygLd',
        description: 'A refreshing blend of Ginger, Turmeric, and Holy Basil.'
    },
    {
        id: 'amla-oil',
        name: 'Amla Rejuvenating Oil',
        price: 2499,
        category: 'haircare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwXxbXqdnR3i0yNTzITRllyYI8DkHSyeNbeKmHPmDeO_DsJC5PEp9lvQneo57MIpSXalrji0gLc7-v8XFRZq0S-rjBiop_hwEDzpRzegy7BoDkDC_QtCwhQ_XD7i7AOzTi2tYASHLXzyzVlbFwR8XBRmytu8dL5pa10NN1hv5d-i6r8b04p6hXovfZ2mtgd5x6AUir3jUaxnai8-mA3vP52JmEXd3u0M0yFwgJ4cvX6qp4hdcdk_sXyoqQfb8C1fAbkwW5VpVG',
        description: 'Deep conditioning hair oil for growth and natural shine.'
    },
    {
        id: 'saffron-pack',
        name: 'Kashmiri Saffron Face Pack',
        price: 3499,
        category: 'skincare',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4S9AlgQxfks510KoerTva3Q646lYqFA5QoQNS3Jx_E2nIX9fVH34n4AX6bmKZ98npYGxt05l56p2HPYT4ETXTsRpASSVEeBFu92VY2s6ssjVWjJnAywbnNptc4L53Wnb69Jum302B3OokRkodu58Yx7rp_ytMRRJWy6emV8tIu-1cSvtNawaC_jDww_ad81QgM0UI0StBhDjKiXvs2vdAWhl4rKlhH4cS9qUbSAW5XlZQNhxCVCK4iHSoYSJaTQhTFLLnBxk',
        description: 'Premium saffron blended with sandalwood for a radiant glow.'
    },
    {
        id: 'curcumin-capsules',
        name: 'Curcumin Gold Capsules',
        price: 2249,
        category: 'wellness',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7LY6qXDjCcpBhMD6ufKJtmYC43m8HFCCNlgO6Vkd6VA0onoj-wROA9E6Ay5n0fXdXa2XNjUXpnMiulSMkBxTqOvQ1IBAiqsKsg-BzIbuiBbOGQeQKCa5fSUP1CR33l0x_re-FhpOd25blvHy5UP0HZ5onPztSqIARMvpTsyxtG2hSD08w5LBgghlKx86CGp6EAcPnGX2uKvbQFZVghDzkbLKtWM36CEqDpLgN2Vurz_8q4BItr_jYbjbzopHy2Cgbti9s45Z',
        description: 'High-potency turmeric supplement for joint health and inflammation.'
    }
];
