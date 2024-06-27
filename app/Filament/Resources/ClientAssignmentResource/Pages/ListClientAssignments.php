<?php

namespace App\Filament\Resources\ClientAssignmentResource\Pages;

use App\Filament\Resources\ClientAssignmentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListClientAssignments extends ListRecords
{
    protected static string $resource = ClientAssignmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
