<?php

namespace App\Filament\Resources\ClientAssignmentResource\Pages;

use App\Filament\Resources\ClientAssignmentResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateClientAssignment extends CreateRecord
{
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
    protected static string $resource = ClientAssignmentResource::class;
}