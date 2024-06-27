<?php

namespace App\Filament\Resources\ServiceResource\RelationManagers;

use App\Models\Client;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ServicesRelationManager extends RelationManager
{
    protected static string $relationship = 'services';
    protected static bool $isLazy = false;
    public function form(Form $form): Form
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

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('client.name')
                    ->color('primary')
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
            ->defaultSort('created_at', 'desc')
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
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

}