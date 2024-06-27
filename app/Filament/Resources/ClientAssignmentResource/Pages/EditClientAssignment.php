<?php

namespace App\Filament\Resources\ClientAssignmentResource\Pages;

use App\Filament\Resources\ClientAssignmentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditClientAssignment extends EditRecord
{
    protected static string $resource = ClientAssignmentResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
}