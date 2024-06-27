<?php

namespace App\Policies;

use App\Models\ClientAssignment;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ClientAssignmentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        if ($user->hasPermissionTo("View Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ClientAssignment $clientAssignment): bool
    {
        if ($user->hasPermissionTo("View Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if ($user->hasPermissionTo("Create Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ClientAssignment $clientAssignment): bool
    {
        if ($user->hasPermissionTo("View Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ClientAssignment $clientAssignment): bool
    {
        if ($user->hasPermissionTo("Edit Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, ClientAssignment $clientAssignment): bool
    {
        if ($user->hasPermissionTo("Delete Client Assignment")) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, ClientAssignment $clientAssignment): bool
    {
        if ($user->hasPermissionTo("Delete Client Assignment")) {
            return true;
        }
        return false;
    }
}