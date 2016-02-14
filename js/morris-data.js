$(function() {


    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Health History",
            value: 5
        }, {
            label: "Medications",
            value: 2
        }, {
            label: "Allergies",
            value: 4
        }],
        resize: true,
        colors: [
        '#8C1717',
        '#0BA462',
        '#FFA824'
        ]
    });


});
