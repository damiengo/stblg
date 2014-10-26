---
layout: post
title:  "La victoire ou le nul"
date:   2014-07-31 21:47:06
---

La **Ligue 1** a évolué depuis sa création en 1932. Le format du championnat a changé, il a commencé avec 2 groupes en 1933-1934, pour continuer avec un seul et unique groupe ensuite. Le nombre d'équipes a souvent varié entre 16, 18 ou 20 clubs dans l'élite.

Depuis 80 ans, le niveau des équipes s'est rapproché, comme en témoigne l'écart de buts par match depuis 1933. Cet écart s'est resseré au fil du temps, les premiers championnats flirtaient avec les **2 buts d'écart** par match, alors que les championnats plus récents ont vu cet écart tourner autour de **1.2 buts**. Le niveau entre les équipes s'est resseré, les tactiques ont évolué, les équipes marquent de moins en moins de buts.

Il est cependant intéressant de noter que le nombre de buts marqués à domicile décroit, alors que de plus en plus de buts sont marqué à l'extérieur. Depuis 4 saisons, la moyenne des buts marqués à l'extérieur est supérieure à 1, ce qui nous ramène aux même chiffres qu'il y'à une trentaine d'années.


<div id="avg_diff_chart"></div>

Les buts sont à l'origine des victoires dans le football. Cette baisse du nombre de buts à domicile à engendré une baisse des victoires à domicile, essentiellement depuis le début des **années 90**. Inversement, l'augmentation du nombre de buts à l'extérieur à provoqué une augmentation des victoires à l'extérieur. La fluctuation des matchs nuls est quant à elle moins nette, même s'il semble y avoir une augmentation de ceux-ci.

Le graphique présenté plus loin montre que les années 90 sont un tournant dans le championnat de France de Ligue 1. Les équipes jouant à l'extérieur ont commencé à marquer de plus en plus de buts, et par conséquent à gagner plus de matchs. L'année 2010 est l'exercice durant lequel la Ligue 1 a enregistré le plus faible taux de victoires à domicile (41%), cette année étant marquée par un fort taux de matchs nuls à 34%, porté par des équipes comme l'AJ Auxerre (19 nuls), Valenciennes (18 nuls), ou encore l'AS Monaco (17 nuls).

<div id="results_chart"></div>

<script type="text/javascript">

// Graphique des différences de but moyennes
$(function () {
    $('#avg_diff_chart').highcharts({
        chart: {
            type: 'spline', 
            backgroundColor:'rgba(255, 255, 255, 0.1)', 
            style: {
                fontFamily: 'Courier, "Lucida Sans Typewriter", "Lucida Typewriter", "DejaVu Sans Mono", monospace', 
                color: '#352C26'
            }
        },
        title: {
            text: 'Evolution des écarts de buts par match depuis 1933', 
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
                pointStart: Date.UTC(1934, 0, 0, 0, 0, 0)
            }
        },
        series: [{
            name: 'Ecart de buts moyen',
            data: [2.00,2.05,1.90,1.70,1.50,1.58,0,0,0,0,0,0,1.74,1.71,1.86,1.88,1.67,1.63,1.82,1.62,1.48,1.71,1.54,1.64,1.52,1.46,1.58,1.47,1.44,
                   1.44,1.55,1.42,1.57,1.39,1.47,1.38,1.57,1.51,1.50,1.37,1.44,1.42,1.40,1.45,1.51,1.53,1.51,1.25,1.39,1.34,1.29,1.32,
                   1.26,1.13,1.25,1.17,1.22,1.16,1.14,1.16,1.15,1.29,1.20,1.18,1.22,1.21,1.26,1.17,1.22,1.22,1.27,1.07,1.18,1.10,1.19,
                   1.09,1.29,1.11,1.18,1.24,1.22]

        },
        {
            name: 'Moyenne de buts à domicile',
            data: [2.82,2.46,2.35,2.28,1.99,1.97,0,0,0,0,0,0,2.15,2.20,2.28,2.40,2.19,2.03,2.17,2.00,1.93,2.24,2.09,2.03,2.04,2.00,2.00,1.94,1.92,
                   1.89,2.05,1.76,2.03,1.68,1.71,1.76,1.97,1.90,1.84,1.81,1.95,1.92,1.97,1.93,1.97,1.97,1.84,1.78,1.74,1.89,1.53,1.71,
                   1.64,1.38,1.49,1.52,1.53,1.41,1.34,1.44,1.42,1.59,1.44,1.44,1.45,1.48,1.60,1.45,1.52,1.34,1.41,1.35,1.28,1.32,1.35,
                   1.29,1.39,1.34,1.47,1.47,1.41]

        },
        {
            name: 'Moyenne de buts à l\'extérieur',
            data: [1.69,1.46,1.45,1.35,1.31,1.22,0,0,0,0,0,0,1.38,1.31,1.40,1.32,1.35,1.29,1.26,1.15,1.17,1.20,1.21,1.34,1.30,1.32,1.36,1.21,1.22,
                   1.23,1.15,1.08,1.10,0.96,0.93,0.90,1.21,1.01,1.02,0.95,1.08,0.91,1.05,1.03,1.02,1.03,0.98,1.02,0.85,0.97,0.87,0.86,
                   0.81,0.71,0.76,0.84,0.74,0.71,0.76,0.89,0.81,0.92,0.84,0.88,0.91,0.88,0.97,1.06,0.82,0.86,0.92,0.83,0.86,0.93,0.94,
                   0.97,1.02,1.00,1.04,1.08,1.04]

        }]
        ,
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
});

// Graphique des résultats moyens
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
                pointStart: Date.UTC(1934, 0, 0, 0, 0, 0)
            }
        },
        series: [{
            name: 'Victoires',
            data: [0.63,0.58,0.58,0.61,0.47,0.55,0,0,0,0,0,0,0.52,0.57,0.56,0.60,0.53,0.53,0.55,0.58,0.52,0.59,0.57,0.53,0.52,0.52,0.50,
                   0.57,0.53,0.48,0.57,0.53,0.58,0.50,0.54,0.55,0.55,0.55,0.55,0.56,0.56,0.61,0.57,0.58,0.59,0.54,0.58,0.50,
                   0.56,0.59,0.53,0.56,0.56,0.51,0.56,0.53,0.56,0.49,0.48,0.47,0.50,0.52,0.50,0.47,0.50,0.50,0.52,0.49,0.52,
                   0.49,0.49,0.47,0.45,0.48,0.44,0.43,0.47,0.41,0.47,0.45,0.44]

        }, 
        {
            name: 'Nuls',
            data: [0.18,0.16,0.18,0.18,0.30,0.23,0,0,0,0,0,0,0.23,0.20,0.21,0.20,0.23,0.22,0.21,0.21,0.26,0.22,0.22,0.22,0.25,0.27,0.23,
                   0.22,0.24,0.29,0.24,0.26,0.25,0.29,0.23,0.26,0.23,0.26,0.23,0.27,0.26,0.24,0.27,0.24,0.22,0.27,0.20,0.32,
                   0.26,0.27,0.26,0.27,0.30,0.33,0.26,0.29,0.29,0.36,0.33,0.33,0.33,0.29,0.30,0.31,0.25,0.29,0.26,0.27,0.28,
                   0.28,0.26,0.35,0.31,0.31,0.31,0.29,0.26,0.34,0.28,0.28,0.29]    
        },
        {
            name: 'Défaites',
            data: [0.20,0.26,0.25,0.21,0.23,0.23,0,0,0,0,0,0,0.25,0.23,0.23,0.20,0.24,0.25,0.24,0.22,0.22,0.18,0.21,0.25,0.24,0.22,0.27,
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
