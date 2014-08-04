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
                    pointInterval: 365 * 24 * 3600000, // one year
                    pointStart: Date.UTC(1933, 0, 0, 0, 0, 0)
                }
            },
            series: [{
                name: 'Victoires',
                data: [0.63,0.58,0.58,0.61,0.47,0.55,0.52,0.57,0.56,0.60,0.53,0.53,0.55,0.58,0.52,0.59,0.57,0.53,0.52,0.52,0.50,
                       0.57,0.53,0.48,0.57,0.53,0.58,0.50,0.54,0.55,0.55,0.55,0.55,0.56,0.56,0.61,0.57,0.58,0.59,0.54,0.58,0.50,
                       0.56,0.59,0.53,0.56,0.56,0.51,0.56,0.53,0.56,0.49,0.48,0.47,0.50,0.52,0.50,0.47,0.50,0.50,0.52,0.49,0.52,
                       0.49,0.49,0.47,0.45,0.48,0.44,0.43,0.47,0.41,0.47,0.45,0.44]
    
            }, 
            {
                name: 'Nuls',
                data: [0.18,0.16,0.18,0.18,0.30,0.23,0.23,0.20,0.21,0.20,0.23,0.22,0.21,0.21,0.26,0.22,0.22,0.22,0.25,0.27,0.23,
                       0.22,0.24,0.29,0.24,0.26,0.25,0.29,0.23,0.26,0.23,0.26,0.23,0.27,0.26,0.24,0.27,0.24,0.22,0.27,0.20,0.32,
                       0.26,0.27,0.26,0.27,0.30,0.33,0.26,0.29,0.29,0.36,0.33,0.33,0.33,0.29,0.30,0.31,0.25,0.29,0.26,0.27,0.28,
                       0.28,0.26,0.35,0.31,0.31,0.31,0.29,0.26,0.34,0.28,0.28,0.29]    
            },
            {
                name: 'Défaites',
                data: [0.20,0.26,0.25,0.21,0.23,0.23,0.25,0.23,0.23,0.20,0.24,0.25,0.24,0.22,0.22,0.18,0.21,0.25,0.24,0.22,0.27,
                       0.21,0.23,0.23,0.19,0.21,0.18,0.20,0.22,0.19,0.22,0.19,0.22,0.18,0.18,0.15,0.16,0.18,0.19,0.18,0.21,0.17,
                       0.18,0.14,0.21,0.17,0.14,0.16,0.18,0.18,0.15,0.15,0.19,0.19,0.17,0.20,0.19,0.23,0.25,0.21,0.22,0.24,0.20,
                       0.23,0.25,0.19,0.24,0.22,0.26,0.27,0.27,0.24,0.24,0.27,0.27]    
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
