<?php

namespace App\Filament\Resources\ClientAssignmentResource\Pages;

use App\Filament\Resources\ClientAssignmentResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewClientAssignment extends ViewRecord
{
    protected static string $resource = ClientAssignmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
