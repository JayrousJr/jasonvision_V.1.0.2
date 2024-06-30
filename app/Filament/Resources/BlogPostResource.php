<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogPostResource\Pages;
use App\Filament\Resources\BlogPostResource\RelationManagers;
use App\Models\BlogPost;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\ActionSize;
use Filament\Tables;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static ?string $navigationIcon = 'heroicon-o-megaphone';
    protected static ?string $navigationGroup = 'Info Manager';
    protected static ?int $navigationSort = 3;
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('')
                    ->columns(3)
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required(3)
                            ->live(debounce: "20s")
                            ->afterStateUpdated(function (callable $get, callable $set) {
                                $title = $get('title');
                                $set("slug", Str::slug($title));
                            })
                            ->maxLength(255),
                        Forms\Components\TextInput::make('location')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->readOnly()
                    ]),
                Fieldset::make('')
                    ->columns()
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                             ->image()
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('2:1')
                            ->imageEditor()
                            ->imageResizeTargetWidth('1000')
                            ->imageResizeTargetHeight('500')
                            ->getUploadedFileNameForStorageUsing(function (callable $get): string {
                                $name = $get('title');
                                return (string) str('img/posts/' . $name . '.webp');
                            })->label('Blog Post Image'),
                        Forms\Components\RichEditor::make('content')
                            ->required()
                    ]),
                Fieldset::make('')
                    ->columns()
                    ->schema([
                        Forms\Components\TextInput::make('instagram')
                            ->prefix('https://')
                            ->suffix('.com')
                            ->default('#')
                            // ->url()
                            ->suffixIcon('heroicon-m-globe-alt')
                            ->maxLength(255)
                            ->helperText('Please Paste your Instagram Link if any start with "https://"'),
                        Forms\Components\TextInput::make('youtube')
                            ->prefix('https://')
                            ->suffix('.com')
                            ->default('#')
                            // ->url()
                            ->suffixIcon('heroicon-m-globe-alt')
                            ->maxLength(255)
                            ->helperText('Please Paste your Instagram Link start with "https://"'),
                        Forms\Components\TextInput::make('facebook')
                            ->prefix('https://')
                            ->suffix('.com')
                            ->default('#')
                            // ->url()
                            ->suffixIcon('heroicon-m-globe-alt')
                            ->maxLength(255)
                            ->helperText('Please Paste your Facebook Link if any start with "https://"'),
                        Forms\Components\TextInput::make('twitter')
                            ->prefix('https://')
                            ->suffix('.com')
                            ->default('#')
                            // ->url()
                            ->suffixIcon('heroicon-m-globe-alt')
                            ->maxLength(255)
                            ->helperText('Please Paste your Twitter Link if any start with "https://"'),

                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('title')
                    ->color("primary")
                    ->label("Post Titile")
                    ->searchable(),
                Tables\Columns\TextColumn::make('location')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->label("Posted")
                    ->sortable()
                    ->since(),
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
            'index' => Pages\ListBlogPosts::route('/'),
            'create' => Pages\CreateBlogPost::route('/create'),
            'view' => Pages\ViewBlogPost::route('/{record}'),
            'edit' => Pages\EditBlogPost::route('/{record}/edit'),
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