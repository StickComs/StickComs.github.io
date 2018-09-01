var sites = [
        '1_light_traffic',
        '2_writing_prompt',
        '3_dog_love',
        '4_shipping'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        var link = '/archive/' + sites[i];
        location.href = link;
        return false;
    }
