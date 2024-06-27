<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommentResource\Pages;
use App\Filament\Resources\CommentResource\RelationManagers;
use App\Models\Comment;
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

class CommentResource extends Resource
{
    protected static ?string $model = Comment::class;

    protected static ?string $navigationGroup = 'Info Manager';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left-ellipsis';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make("Comment Details")
                    ->columns(2)
                    ->schema([
                        Forms\Components\Select::make('user_id')
                            ->relationship('userComment', 'name')
                            ->label("User Name")
                            ->required(),
                        Forms\Components\Select::make('post_id')
                            ->relationship('post', 'title')
                            ->required(),
                        Forms\Components\RichEditor::make('content')
                            ->columnSpanFull()
                            ->required()
                    ]),
                Fieldset::make("User Details")
                    ->columns(2)
                    ->schema([
                        Forms\Components\Select::make('user_id')
                            ->relationship('userComment', 'phone')
                            ->label("Phone Number"),
                        Forms\Components\Select::make('user_id')
                            ->relationship('userComment', 'country')
                            ->label("Country"),
                        Forms\Components\Select::make('user_id')
                            ->relationship('userComment', 'organization')
                            ->label("Organization"),
                        Forms\Components\Select::make('user_id')
                            ->relationship('userComment', 'position')
                            ->label("Position in Organization"),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('userComment.profile_photo_path')
                    ->circular()
                    ->label("User Profile"),
                Tables\Columns\TextColumn::make('userComment.name')
                    ->color("primary")
                    ->label("User Name"),
                Tables\Columns\TextColumn::make('post.title')
                    ->numeric()
                    ->label("Post Commented Upon"),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->label("Commented On")
                    ->since(),

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
            'index' => Pages\ListComments::route('/'),
            'create' => Pages\CreateComment::route('/create'),
            'view' => Pages\ViewComment::route('/{record}'),
            'edit' => Pages\EditComment::route('/{record}/edit'),
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