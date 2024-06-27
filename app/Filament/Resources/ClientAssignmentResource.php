<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ClientAssignmentResource\Pages;
use App\Filament\Resources\ClientAssignmentResource\RelationManagers;
use App\Models\Client;
use App\Models\ClientAssignment;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\ActionSize;
use Filament\Tables;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ClientAssignmentResource extends Resource
{
    protected static ?string $model = ClientAssignment::class;
    protected static ?string $navigationGroup = 'Client Management';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationIcon = 'heroicon-o-wrench-screwdriver';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Basic Details')
                    ->columns(2)
                    ->schema([
                        Forms\Components\Select::make('service_id')
                            ->label('Service Name')
                            ->required()
                            ->searchable()
                            ->options(Service::all()->pluck("name", "id")),
                        Forms\Components\Select::make('client_id')
                            ->required()->label('Client Name')
                            ->searchable()
                            ->options(Client::all()->pluck("name", "id")),
                    ]),
                Fieldset::make('Service Detai')
                    ->columns(3)
                    ->schema([
                        Forms\Components\Toggle::make('maintenance')
                            ->label('Maintenance Done')
                            ->required(),
                        Forms\Components\Toggle::make('addition_service')
                            ->label('Additional service Done')
                            ->required(),
                        Forms\Components\Toggle::make('new_service')
                            ->required(),
                    ]),
                Fieldset::make('Description')
                    ->columns(1)
                    ->schema([
                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->label('Description of What was Done')
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('client.name')
                    ->color('primary')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('service.name')
                    ->color('green')
                    ->searchable(),
                Tables\Columns\IconColumn::make('maintenance')
                    ->boolean(),
                Tables\Columns\IconColumn::make('addition_service')
                    ->boolean(),
                Tables\Columns\IconColumn::make('new_service')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Performed')
                    ->dateTime()
                    ->color("primary")
                    ->since(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->label('Edited')
                    ->since()->color("rose"),
            ])
            ->filters([
                SelectFilter::make('service')
                    ->label('Service Type')
                    ->relationship('service', 'name')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('maintenance')
                    ->searchable()
                    ->options([
                        '1' => 'With Maintenance',
                        '0' => 'No aintenance',
                    ]),
                SelectFilter::make('addition_service')
                    ->searchable()
                    ->options([
                        '1' => 'With Additional service',
                        '0' => 'No Additional service',
                    ]),
                SelectFilter::make('new_service')
                    ->searchable()
                    ->options([
                        '1' => 'With New Service',
                        '0' => 'No New Service',
                    ]),
                Tables\Filters\TrashedFilter::make()
                    ->searchable(),
            ])
            ->actions([
                ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ])
                    ->size(ActionSize::Small)
                    ->icon('heroicon-m-ellipsis-horizontal')
                    ->tooltip('Actions')
            ])->defaultSort('created_at', 'desc')
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientAssignments::route('/'),
            'create' => Pages\CreateClientAssignment::route('/create'),
            'view' => Pages\ViewClientAssignment::route('/{record}'),
            'edit' => Pages\EditClientAssignment::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}