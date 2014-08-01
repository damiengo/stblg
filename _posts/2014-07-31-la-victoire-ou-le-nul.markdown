---
layout: post
title:  "La victoire ou le nul"
date:   2014-07-31 21:47:06
---

La **Ligue 1** a évolué depuis sa création en 1933.

<div id="results_chart"></div>

<script type="text/javascript">
$(function () {
        $('#results_chart').highcharts({
            chart: {
                type: 'spline', 
                backgroundColor:'rgba(255, 255, 255, 0.1)', 
                style: {
                    fontFamily: 'Courier, "Lucida Sans Typewriter", "Lucida Typewriter", "DejaVu Sans Mono", monospace', 
                    color: '#352C26'
                }
            },
            title: {
                text: 'Evolution des résultats des matchs depuis 1933', 
                style: {
                    fontFamily: 'Courier, "Lucida Sans Typewriter", "Lucida Typewriter", "DejaVu Sans Mono", monospace', 
                    color: '#352C26'
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    overflow: 'justify'
                }
            },
            yAxis: {
                title: {
                    text: 'Résultats'
                },
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null
            },
            tooltip: {
                valueSuffix: ' '
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 3600000, // one hour
                    pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
            },
            series: [{
                name: 'Victoires',
                data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                    7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                    8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                    7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                    3.0, 3.0]
    
            }, {
                name: 'Nuls',
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
                    0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                    3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
            }]
            ,
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    });
</script>
