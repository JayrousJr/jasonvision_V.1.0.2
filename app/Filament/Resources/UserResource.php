<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\Department;
use App\Models\Role;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Support\Enums\ActionSize;
use Filament\Tables;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Hash;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationGroup = 'System Management';
    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Personal Details')
                    ->columns(3)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('phone')
                            // ->tel()
                            ->maxLength(255)
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->default(null),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->maxLength(255),
                    ]),
                Fieldset::make('Roles and Profession')
                    ->columns(3)
                    ->schema([
                        Select::make('roles')
                            ->label('Company Role')
                            // ->required(fn(string $operation): bool => $operation === 'create')
                            ->optionsLimit(4)
                            ->searchable()
                            ->live()
                            ->hidden(!auth()->user()->isCEO())
                            ->relationship('roles', 'name')
                            ->preload()
                            ->afterStateUpdated(function ($state, Set $set) {
                                if (blank($state))
                                    return;
                                $role = Role::find($state);
                                $set('role', $role->name);
                            }),
                        Forms\Components\Select::make('department_id')
                            ->label("Department")
                            ->searchable()
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->hidden(!auth()->user()->isCEO())
                            ->options(Department::all()->pluck('name', 'id'))
                            ->required(),
                        TextInput::make('role')
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->readOnly()
                            ->helperText('This is automatically updated')
                            ->label('Role In the System'),
                    ]),
                Fieldset::make('Security & Auth')
                    ->schema([
                        Forms\Components\TextInput::make('password')
                            ->password()
                            ->dehydrateStateUsing(fn(string $state): string => Hash::make($state))
                            ->dehydrated(fn(?string $state): bool => filled($state))
                            ->required(fn(string $operation): bool => $operation === 'create'),
                        Forms\Components\Toggle::make('isMember')
                            ->label("Is Staff")
                            ->default(1)
                            ->required(fn(string $operation): bool => $operation === 'create'),
                    ]),
                Fieldset::make('Profile and Membership')
                    ->schema([
                        Forms\Components\FileUpload::make('profile_photo_path')
                            ->label("Profile")
                            ->default('img/profile-photos/default.jpg')
                            ->image()
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('1:1')
                            ->imageEditor()
                            ->imageResizeTargetWidth('500')
                            ->imageResizeTargetHeight('500')
                            ->getUploadedFileNameForStorageUsing(function (TemporaryUploadedFile $file, callable $get): string {
                                $name = $get('email');
                                return (string) str('img/profile-photos/profile_' . $name . '.webp');
                            })->label('Profile Image'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('profile_photo_path')
                    ->label("Profile")
                    ->circular(),
                Tables\Columns\TextColumn::make('name')
                    ->color("primary")
                    ->searchable(),
                Tables\Columns\TextColumn::make('role')
                    ->label("Position")
                    ->color(function ($state) {
                        if ($state === "User") {
                            return "rose";
                        }
                        if ($state === "CEO") {
                            return "green";
                        } else {
                            return "primary";
                        }
                    })
                    ->searchable(),
                Tables\Columns\TextColumn::make('department.name')
                    ->label("Department")
                    ->color(function ($state) {
                        return "primary";
                    })
                    ->searchable(),
                Tables\Columns\IconColumn::make('isMember')
                    ->label("Is Staff")
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('isMember')
                    ->label('Users')
                    ->searchable()
                    ->options([
                        '1' => 'Jason Vision Staff',
                        '0' => 'Non Staff',
                    ]),
                Tables\Filters\TrashedFilter::make()->searchable(),

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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where("isMember", 1)
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}