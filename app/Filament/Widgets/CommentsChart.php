<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use App\Models\Comment;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class CommentsChart extends ChartWidget
{
    protected static ?string $heading = 'Blog Post User Comments';
    protected int|string|array $columnSpan = 'full';
    protected static ?int $sort = 2;
    protected static ?string $maxHeight = '300px';
    protected static string $color = 'rose';
    protected static bool $isLazy = false;

    protected function getData(): array
    {
        $getcomment = Trend::model(Comment::class)
            ->between(now()->startOfWeek(), now()->endOfWeek())
            ->perDay()
            ->count('id');

        $labels = $getcomment->map(fn(TrendValue $trendValue) => Carbon::parse($trendValue->date)->format('D'));
        $data = $getcomment->map(fn(TrendValue $trendValue) => $trendValue->aggregate);

        // post
        $getpost = Trend::model(BlogPost::class)
            ->between(now()->startOfWeek(), now()->endOfWeek())
            ->perDay()
            ->count('id');
        $postdata = $getpost->map(fn(TrendValue $trendValue) => $trendValue->aggregate);


        return [

            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Message',
                    'data' => $data,
                    'fill' => [
                        'target' => 'origin',
                        'below' => 'rgba(54, 162, 235, 0.2)',
                        'above' => 'rgba(54, 162, 235, 0.2)',
                    ],
                    'borderColor' => 'rgba(54, 162, 235, 0.7)',
                    'tension' => 0.5,
                ],
                [
                    'label' => 'Post',
                    'data' => $postdata,
                    'fill' => [
                        'target' => 'origin',
                        'below' => 'rgba(224, 231, 255,0.2)',
                        'above' => 'rgba(224, 231, 255,0.2)',
                    ],
                    'borderColor' => 'rgb(55, 48, 163)',
                    'tension' => 0.5,
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}