<?php

use frontend\models\Aid;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\web\JsExpression;
use daixianceng\echarts\ECharts;

/** @var yii\web\View $this */
/** @var frontend\models\AidSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = '各国对乌克兰的援助（月份）';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="aid-date-bar">
    <?= ECharts::widget([
    'responsive' => true,
    'options' => [
        'style' => 'height: 1300px;'
    ],
    'pluginEvents' => [
        'click' => [
            new JsExpression('function (params) {console.log(params)}'),
            new JsExpression('function (params) {console.log("ok")}')
        ],
        'legendselectchanged' => new JsExpression('function (params) {console.log(params.selected)}')
    ],
    'pluginOptions' => [
        'option' => [
            'title' => [
                'text' => 'National assistance to Ukraine(Date/Month)'
            ],
            'grid' => [
                'left' => '3%',
                'right' => '4%',
                'bottom' => '3%',
                'containLabel' => true
            ],
            'tooltip' => [
                'trigger' => 'axis',
            ],
            'xAxis' => [
                'type' => 'category',
                'data' => $date
                //'axisLabel' => ['interval' => 0]      
            ],
            'yAxis' => [
                'scale' => true,
                'type' => 'value',
            ],
            'series' => [
                [
                    'data' => $value,
                    'type' => 'bar',
                    //'barGap' => '50%'
                ]
            ]
        ]
    ]
]); ?>
</div>

<div class="aid-date-pie">
    <?= ECharts::widget([
    'responsive' => true,
    'options' => [
        'style' => 'height: 1300px;'
    ],
    'pluginEvents' => [
        'click' => [
            new JsExpression('function (params) {console.log(params)}'),
            new JsExpression('function (params) {console.log("ok")}')
        ],
        'legendselectchanged' => new JsExpression('function (params) {console.log(params.selected)}')
    ],
    'pluginOptions' => [
        'option' => [
            'title' => [
                'text' => 'National assistance to Ukraine(Date/Month)'
            ],
            'grid' => [
                'left' => '3%',
                'right' => '4%',
                'bottom' => '3%',
                'containLabel' => true
            ],
            'tooltip' => [
                'trigger' => 'item'
            ],
            'legend' => [
                'top' => '5%',
                'left' => 'center'
            ],
            //'yAxis' => [
            //    'type' => 'category',
            //    'data' => $country
                //'axisLabel' => ['interval' => 0]      
            //],
            //'xAxis' => [
            //    'scale' => true,
            //    'type' => 'value',
            //    'boundaryGap' => [0,0.01]
            //],
            'series' => [
                [
                    'name' => 'Assistance from',
                    'type' => 'pie',
                    //'barGap' => '50%'
                    'radius' => ['40%','70%'],
                    'avoidLabelOverLap' => false,
                    'itemStyle' => [
                        'borderRadius' => 10,
                        'borderColor' => '#fff',
                        'borderWidth' => 2
                    ],
                    'label' => [
                        'show' => false,
                        'position' => 'center'
                    ],
                    'emphasis' => [
                        'label' => [
                            'show' => true,
                            'fontSize' => 40,
                            'fontWeight' => 'bold'
                        ],
                    ],
                    'labelLine' => [
                        'show' => false
                    ],
                    'data' => $value
                ]
            ]
        ]
    ]
]); ?>
</div>