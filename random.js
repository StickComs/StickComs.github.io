var sites = [
        '1_light_traffic',
        '2_writing_prompt',
        '3_love_at_first_sight'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        var link = '/archive/' + sites[i];
        location.href = link;
        return false;
    }
