var sites = [
        '1_light_traffic',
        '2_writing_prompt'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        var link = 'https://david4915.github.io/StickComs/archive/' + sites[i];
        location.href = link;
        return false;
    }
