<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SocialMediaResource\Pages;
use App\Filament\Resources\SocialMediaResource\RelationManagers;
use App\Models\SocialMedia;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SocialMediaResource extends Resource
{
    protected static ?string $model = SocialMedia::class;

    protected static ?int $navigationSort = 4;
    protected static ?string $navigationGroup = 'Info Manager';
    protected static ?string $navigationIcon = 'heroicon-o-ellipsis-horizontal-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Social Media Details')
                    ->columns(2)
                    ->schema([
                        Forms\Components\Select::make('socialmedia')
                            // ->unique(fn(string $operation): bool => $operation === 'create')
                            ->searchable()
                            ->live()
                            ->options([
                                'BsWhatsapp' => 'Whatsapp',
                                'BsTwitterX' => 'Twitter',
                                'BsInstagram' => 'Instagram',
                                'BsLinkedin' => 'Linkedin',
                                'BsGithub' => 'Github',
                                'BsTiktok' => 'Tiktok',
                                'BsYoutube' => 'Youtube',
                                'BsDiscord' => 'BsDiscord'
                            ])
                            ->afterStateUpdated(function (callable $get, callable $set) {
                                $icon = $get('socialmedia');
                                $set("icon", $icon);
                            })
                            ->label("Social Media")
                            ->required(fn(string $operation): bool => $operation === 'create'),
                        Forms\Components\TextInput::make('icon')
                            ->required()
                            ->readOnly()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('link')
                            ->required()
                            ->prefix('https://')
                            ->suffix('.com')
                            ->columnSpanFull()
                            // ->url()
                            ->suffixIcon('heroicon-s-globe-alt')
                            ->maxLength(255)
                            ->helperText('Please Paste your social network link here start with "https://"'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('socialmedia')
                    ->color('primary')
                    ->label('Social Media')
                    ->searchable(),
                Tables\Columns\TextColumn::make('link')
                    ->color('rose')
                    ->copyable()
                    ->copyMessage('Link copied')
                    ->copyMessageDuration(1000)
                    ->icon('heroicon-m-globe-alt')
                    ->iconColor('primary')
                    ->searchable(),
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
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListSocialMedia::route('/'),
            'create' => Pages\CreateSocialMedia::route('/create'),
            'view' => Pages\ViewSocialMedia::route('/{record}'),
            'edit' => Pages\EditSocialMedia::route('/{record}/edit'),
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