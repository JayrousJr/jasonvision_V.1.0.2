<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubServiceResource\Pages;
use App\Filament\Resources\SubServiceResource\RelationManagers;
use App\Models\Service;
use App\Models\SubService;
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
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Illuminate\Support\Str;

class SubServiceResource extends Resource
{
    protected static ?string $model = SubService::class;

    protected static ?string $navigationGroup = 'Services Management';
    protected static ?string $navigationIcon = 'heroicon-o-server-stack';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Sub Service Details')
                    ->columns(3)
                    ->schema([
                        Forms\Components\Select::make('service_id')
                            ->required()
                            ->searchable()
                            ->options(Service::all()->pluck('name', 'id')),
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->afterStateUpdated(function (callable $get, callable $set) {
                                $name = $get("name");
                                $set("slug", Str::slug($name));
                            })
                            ->live(debounce: 5000),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->readOnly()
                            ->maxLength(255),

                    ]),
                Fieldset::make('Image and Discription')
                    ->columns(2)
                    ->schema([
                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->maxLength(15000),
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('2:1')
                            ->imageEditor()
                            ->imageResizeTargetWidth('1000')
                            ->imageResizeTargetHeight('500')
                            ->getUploadedFileNameForStorageUsing(function (callable $get): string {
                                $name = $get('name');
                                return (string) str('img/sub_service/' . $name . '.webp');
                            })->label('Profile Image'),

                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('name')
                    ->label("Subservice Name")
                    ->color("primary")
                    ->searchable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('subService.name')
                    ->label("Service")
                    ->color("green")
                    ->searchable()
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('service_id')
                    ->label('Service Type')
                    ->searchable()
                    ->multiple()
                    ->options(Service::all()->pluck('name', 'id')),
                Tables\Filters\TrashedFilter::make()->searchable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->actions([
                ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ])
                    ->size(ActionSize::Small)
                    ->icon('heroicon-m-ellipsis-horizontal')
                    ->tooltip('Actions')
            ])
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
            'index' => Pages\ListSubServices::route('/'),
            'create' => Pages\CreateSubService::route('/create'),
            'view' => Pages\ViewSubService::route('/{record}'),
            'edit' => Pages\EditSubService::route('/{record}/edit'),
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